import * as Appcues from '@appcues/react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import {
  PropsWithChildren,
  createContext,
  use,
  useEffect,
  useState,
} from 'react';

// https://docs.expo.dev/router/advanced/authentication/

type AuthContextType = {
  isLoading: boolean;
  email: string | null;
  signIn: (email: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoading: false,
  email: null,
  signIn: () => {},
  signOut: () => {},
});

// This hook can be used to access the user info.
export function useAuth() {
  return use(AuthContext);
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setAuth] = useState<string | null>(null);
  const {
    getItem: getEmail,
    setItem: setEmail,
    removeItem: removeEmail,
  } = useAsyncStorage('@email_key');

  const getSavedEmail = async () => {
    const savedEmail = await getEmail();
    await saveEmail(savedEmail);
    setIsLoading(false);
  };

  const saveEmail = async (newValue: string | null) => {
    setAuth(newValue);

    if (newValue !== null) {
      Appcues.identify(newValue);
      const domain = newValue.split('@')[1];
      if (domain !== undefined) {
        Appcues.group(domain);
      }
      await setEmail(newValue);
    } else {
      Appcues.reset();
      removeEmail();
    }
  };

  useEffect(() => {
    getSavedEmail();
  }, []);

  return (
    <AuthContext
      value={{
        signIn: (email: string) => {
          saveEmail(email);
        },
        signOut: () => {
          saveEmail(null);
        },
        email,
        isLoading,
      }}
    >
      {children}
    </AuthContext>
  );
}

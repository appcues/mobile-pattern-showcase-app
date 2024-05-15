import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { SplashScreen, router, useSegments } from 'expo-router';
import React, { PropsWithChildren } from 'react';

import * as AppcuesWrapper from '../components/AppcuesWrapper';

// https://docs.expo.dev/router/reference/authentication/

type AuthContextType = {
  email: string | null;
  signIn: (email: string) => void;
  signOut: () => void;
};

const AuthContext = React.createContext<AuthContextType>(null!);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(email: string | null) {
  const segments = useSegments();

  React.useEffect(() => {
    const isAuthRoute = segments[0] === '(auth)';
    const isPreviewRoute =
      segments[0] === '(tabs)' && segments[1] === 'preview';

    // If the user is not signed in and the initial segment is not anything in the auth group.
    if (!email && !isAuthRoute && !isPreviewRoute) {
      // Redirect to the sign-in page.
      router.replace('/sign-in');
    } else if (email && isAuthRoute) {
      // Redirect away from the sign-in page.
      router.replace('/patterns');
    }
  }, [email, segments]);
}

export function AuthProvider(props: PropsWithChildren) {
  const [email, setAuth] = React.useState<string | null>(null);
  const {
    getItem: getEmail,
    setItem: setEmail,
    removeItem: removeEmail,
  } = useAsyncStorage('@email_key');

  const getSavedEmail = async () => {
    const savedEmail = await getEmail();
    await saveEmail(savedEmail);

    SplashScreen.hideAsync();
  };

  const saveEmail = async (newValue: string | null) => {
    setAuth(newValue);

    if (newValue !== null) {
      AppcuesWrapper.identify(newValue);
      await setEmail(newValue);
    } else {
      AppcuesWrapper.reset();
      removeEmail();
    }
  };

  React.useEffect(() => {
    getSavedEmail();
  }, []);

  useProtectedRoute(email);

  return (
    <AuthContext.Provider
      value={{
        signIn: (email: string) => {
          saveEmail(email);
        },
        signOut: () => {
          saveEmail(null);
        },
        email,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

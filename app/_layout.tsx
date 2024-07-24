import * as Appcues from '@appcues/react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Linking from 'expo-linking';
import {
  Slot,
  SplashScreen,
  useGlobalSearchParams,
  usePathname,
} from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { AuthProvider } from '../context/auth';
import { LocaleProvider } from '../context/locale';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
// Splash screen is hidden in the AuthProvider once the state there is determined.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // https://docs.expo.dev/router/reference/screen-tracking/
  const pathname = usePathname();
  const params = useGlobalSearchParams();

  const url = Linking.useURL();

  const [, error] = useFonts({
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const initializeSdk = async () => {
      await Appcues.setup('98227', '16daf46b-3231-4e4a-bb3c-273a4e9100dd');
    };
    initializeSdk();
  }, []);

  useEffect(() => {
    Appcues.screen(pathname);
  }, [pathname, params]);

  useEffect(() => {
    if (url == null) {
      return;
    }

    Appcues.didHandleURL(url).then((appcuesDidHandleURL) => {
      if (!appcuesDidHandleURL) {
        // Handle a non-Appcues URL
        console.log(url);
      }
    });
  }, [url]);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <LocaleProvider>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}

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
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import * as AppcuesWrapper from '../components/AppcuesWrapper';
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
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // https://docs.expo.dev/router/reference/screen-tracking/
  const pathname = usePathname();
  const params = useGlobalSearchParams();

  const url = Linking.useURL();

  // Ensures that first _real_ render of the app doesn't occur until
  // SDK init complete - to avoid screen view analytics before SDK is ready
  const [initComplete, setInitComplete] = useState(false);

  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const initializeSdk = async () => {
      await AppcuesWrapper.setup(
        '98227',
        '16daf46b-3231-4e4a-bb3c-273a4e9100dd'
      );
      setInitComplete(true);
    };
    initializeSdk();
  }, []);

  useEffect(() => {
    AppcuesWrapper.screen(pathname);
  }, [pathname, params]);

  useEffect(() => {
    if (url == null) {
      return;
    }

    AppcuesWrapper.didHandleURL(url).then((appcuesDidHandleURL) => {
      if (!appcuesDidHandleURL) {
        // Handle a non-Appcues URL
        console.log(url);
      }
    });
  }, [url]);

  if (!loaded || !initComplete) {
    return null;
  }

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

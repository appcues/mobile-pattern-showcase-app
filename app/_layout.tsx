import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Slot } from 'expo-router';
import { AuthProvider } from '../context/auth';

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
  const [loaded, error] = useFonts({
    'Mulish-Black': require('../assets/fonts/Mulish-Black.ttf'),
    'Mulish-ExtraBold': require('../assets/fonts/Mulish-ExtraBold.ttf'),
    'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
    'Mulish-SemiBold': require('../assets/fonts/Mulish-SemiBold.ttf'),
    'Mulish-Medium': require('../assets/fonts/Mulish-Medium.ttf'),
    'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
    'Mulish-Light': require('../assets/fonts/Mulish-Light.ttf'),
    'Mulish-ExtraLight': require('../assets/fonts/Mulish-ExtraLight.ttf'),
    'Mulish-BlackItalic': require('../assets/fonts/Mulish-BlackItalic.ttf'),
    'Mulish-ExtraBoldItalic': require('../assets/fonts/Mulish-ExtraBoldItalic.ttf'),
    'Mulish-BoldItalic': require('../assets/fonts/Mulish-BoldItalic.ttf'),
    'Mulish-SemiBoldItalic': require('../assets/fonts/Mulish-SemiBoldItalic.ttf'),
    'Mulish-MediumItalic': require('../assets/fonts/Mulish-MediumItalic.ttf'),
    'Mulish-Italic': require('../assets/fonts/Mulish-Italic.ttf'),
    'Mulish-LightItalic': require('../assets/fonts/Mulish-LightItalic.ttf'),
    'Mulish-ExtraLightItalic': require('../assets/fonts/Mulish-ExtraLightItalic.ttf'),
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

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}

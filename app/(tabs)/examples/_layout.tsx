import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

import Themes from '../../../constants/Themes';

export default function ExamplesLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor:
            colorScheme === 'light'
              ? Themes.light.background
              : Themes.dark.background,
        },
        headerTitleStyle: {
          fontFamily: 'Mulish-Bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Examples',
        }}
      />
    </Stack>
  );
}

import { Stack } from 'expo-router';

import { useThemeColor } from '../../../components/Themed';
import { useLocale } from '../../../context/locale';

export default function ExamplesLayout() {
  const themedForegroundColor = useThemeColor('primaryForeground');
  const themedBackgroundColor = useThemeColor('tabBarBackground');
  const { language, strings } = useLocale();

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: themedBackgroundColor,
        },
        headerTitleStyle: {
          fontFamily: 'Mulish-Bold',
        },
        headerBackTitleStyle: {
          fontFamily: 'Mulish-Regular',
        },
        headerTintColor: themedForegroundColor,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: strings[language].tabs.examples,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Example Detail',
        }}
      />
    </Stack>
  );
}

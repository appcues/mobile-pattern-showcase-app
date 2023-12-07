import { Stack } from 'expo-router';

import { useThemeColor } from '../../../components/Themed';
import { useLocale } from '../../../context/locale';

export default function PatternsLayout() {
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
          title: strings[language].tabs.patterns,
        }}
      />
      <Stack.Screen
        name="modals"
        options={{
          title: strings[language].modals.title,
        }}
      />
      <Stack.Screen
        name="tooltips"
        options={{
          title: strings[language].tooltips.title,
        }}
      />
      <Stack.Screen
        name="embeds"
        options={{
          title: strings[language].embeds.title,
        }}
      />
    </Stack>
  );
}

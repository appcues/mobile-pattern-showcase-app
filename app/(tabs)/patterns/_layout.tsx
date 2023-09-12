import { Stack } from 'expo-router';

import { useThemeColor } from '../../../components/Themed';

export default function PatternsLayout() {
  const themedForegroundColor = useThemeColor('primaryForeground');
  const themedBackgroundColor = useThemeColor('tabBarBackground');

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
          title: 'Patterns',
        }}
      />
      <Stack.Screen
        name="modals"
        options={{
          title: 'Modals',
        }}
      />
      <Stack.Screen
        name="tooltips"
        options={{
          title: 'Tooltips',
        }}
      />
      <Stack.Screen
        name="embeds"
        options={{
          title: 'Embeds',
        }}
      />
    </Stack>
  );
}

import { Stack } from 'expo-router';

import { useThemeColor } from '../../../components/Themed';

export default function PreviewLayout() {
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
          title: 'Preview',
        }}
      />
      <Stack.Screen
        name="[...preview]"
        options={{
          title: 'Preview',
        }}
      />
    </Stack>
  );
}
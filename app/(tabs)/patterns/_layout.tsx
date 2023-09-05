import { Stack } from 'expo-router';
import { Button, useColorScheme } from 'react-native';

import Themes from '../../../constants/Themes';
import { useAuth } from '../../../context/auth';

export default function PatternsLayout() {
  const colorScheme = useColorScheme();
  const { signOut } = useAuth();

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
          title: 'Patterns',
          headerRight: () => (
            <Button
              onPress={() => {
                console.log('SIGN OUT');
                signOut();
              }}
              title="Sign Out"
              color="#5c5cff"
            />
          ),
        }}
      />
      <Stack.Screen
        name="[pattern]"
        options={{
          title: 'Detail',
        }}
      />
    </Stack>
  );
}

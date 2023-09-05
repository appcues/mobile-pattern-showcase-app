import { Stack } from 'expo-router';
import { Button } from 'react-native';

import { useAuth } from '../../../context/auth';

export default function PatternsLayout() {
  const { signOut } = useAuth();

  return (
    <Stack>
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

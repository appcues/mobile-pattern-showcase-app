import { Stack } from 'expo-router';

export default function ExamplesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Examples',
        }}
      />
    </Stack>
  );
}

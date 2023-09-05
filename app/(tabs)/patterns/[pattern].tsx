import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function Details() {
  const { pattern } = useLocalSearchParams<{ pattern: string }>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail screen for {pattern}!</Text>
    </View>
  );
}

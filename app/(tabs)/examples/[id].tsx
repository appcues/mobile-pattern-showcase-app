import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ExampleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail screen for {id}!</Text>
    </View>
  );
}

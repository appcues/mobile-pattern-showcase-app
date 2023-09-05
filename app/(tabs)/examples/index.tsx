import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';

export default function Examples() {
  return (
    <View style={styles.container}>
      <Text>🚧 Coming Soon 🚧</Text>
      <Link href="/examples/test">Test link to a detail screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

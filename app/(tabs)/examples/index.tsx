import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View, useColorScheme } from 'react-native';

import { Text } from '../../../components/Themed';
import Themes from '../../../constants/Themes';

export default function Examples() {
  const colorScheme = useColorScheme();

  return (
    <ScrollView
      style={{
        backgroundColor:
          colorScheme === 'light'
            ? Themes.light.background
            : Themes.dark.background,
      }}
    >
      <View style={styles.container}>
        <Text>🚧 Coming Soon 🚧</Text>
        <Link href="/examples/test">Test link to a detail screen</Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

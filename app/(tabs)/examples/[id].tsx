import { useLocalSearchParams } from 'expo-router';
import { ScrollView, useColorScheme } from 'react-native';

import { Text, View } from '../../../components/Themed';
import Themes from '../../../constants/Themes';

export default function ExampleDetail() {
  const colorScheme = useColorScheme();
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScrollView
      style={{
        backgroundColor:
          colorScheme === 'light'
            ? Themes.light.background
            : Themes.dark.background,
      }}
    >
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail screen for {id}!</Text>
      </View>
    </ScrollView>
  );
}

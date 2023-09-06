import { useLocalSearchParams } from 'expo-router';
import { ScrollView, useColorScheme } from 'react-native';

import { WrappedAppcuesFrameView } from '../../../components/AppcuesWrapper';
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
      <WrappedAppcuesFrameView frameID={id} />
    </ScrollView>
  );
}

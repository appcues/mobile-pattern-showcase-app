import { ScrollView, useColorScheme } from 'react-native';

import { WrappedAppcuesFrameView } from '../../../components/AppcuesWrapper';
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
      <WrappedAppcuesFrameView frameID="examples-root" />
    </ScrollView>
  );
}

import { AppcuesFrameView } from '@appcues/react-native';

import { ScrollView } from '../../../components/Themed';

export default function Examples() {
  return (
    <ScrollView>
      <AppcuesFrameView frameID="examples-root" />
    </ScrollView>
  );
}

import * as Appcues from '@appcues/react-native';

import { ScrollView } from '../../../components/Themed';

export default function Examples() {
  return (
    <ScrollView>
      <Appcues.AppcuesFrameView frameID="examples-root" />
    </ScrollView>
  );
}

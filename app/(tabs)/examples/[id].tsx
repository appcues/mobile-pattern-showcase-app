import * as Appcues from '@appcues/react-native';
import { useLocalSearchParams } from 'expo-router';

import { ScrollView } from '../../../components/Themed';

export default function ExampleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScrollView>
      <Appcues.AppcuesFrameView frameID={id} />
    </ScrollView>
  );
}

import { AppcuesFrameView } from '@appcues/react-native';
import { useLocalSearchParams } from 'expo-router';

import { ScrollView } from '../../../components/Themed';

export default function ExampleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScrollView>
      <AppcuesFrameView frameID={id} />
    </ScrollView>
  );
}

import { useLocalSearchParams } from 'expo-router';

import { WrappedAppcuesFrameView } from '../../../components/AppcuesWrapper';
import { ScrollView } from '../../../components/Themed';

export default function ExampleDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScrollView>
      <WrappedAppcuesFrameView frameID={id} />
    </ScrollView>
  );
}

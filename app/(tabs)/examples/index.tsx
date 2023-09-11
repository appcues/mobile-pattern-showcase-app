import { WrappedAppcuesFrameView } from '../../../components/AppcuesWrapper';
import { ScrollView } from '../../../components/Themed';

export default function Examples() {
  return (
    <ScrollView>
      <WrappedAppcuesFrameView frameID="examples-root" />
    </ScrollView>
  );
}

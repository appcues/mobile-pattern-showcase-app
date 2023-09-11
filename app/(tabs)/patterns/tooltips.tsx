import { StyleSheet } from 'react-native';

import * as AppcuesWrapper from '../../../components/AppcuesWrapper';
import Overview from '../../../components/Overview';
import { ScrollView, Text } from '../../../components/Themed';

export default function Tooltips() {
  return (
    <ScrollView>
      <Overview
        title="Highlight specific app elements to draw user attention and nudge action."
        callToAction="See tooltips in action"
        onPress={() => {
          AppcuesWrapper.track('show-tooltip');
        }}
      />
      <Text style={styles.useCases}>Use Cases</Text>
      <AppcuesWrapper.WrappedAppcuesFrameView frameID="tooltips-use-cases" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  useCases: {
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 28,
    textAlign: 'center',
  },
});

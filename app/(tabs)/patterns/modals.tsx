import { StyleSheet } from 'react-native';

import * as AppcuesWrapper from '../../../components/AppcuesWrapper';
import Overview from '../../../components/Overview';
import { ScrollView, Text } from '../../../components/Themed';

export default function Modals() {
  return (
    <ScrollView>
      <Overview
        title="Use partial and full-screen takeovers to convey branded information."
        callToAction="See a modal in action"
        onPress={() => {
          AppcuesWrapper.track('show-modal');
        }}
      />
      <Text style={styles.useCases}>Use Cases</Text>
      <AppcuesWrapper.WrappedAppcuesFrameView frameID="modals-use-cases" />
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

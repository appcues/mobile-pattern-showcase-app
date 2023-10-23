import { StyleSheet } from 'react-native';

import * as AppcuesWrapper from '../../../components/AppcuesWrapper';
import Overview from '../../../components/Overview';
import { ScrollView, Text } from '../../../components/Themed';

export default function Embeds() {
  return (
    <ScrollView>
      <Overview
        title="Inject seamless-looking experiences inline alongside your other app content."
        callToAction="See an embed in action"
        testID="embeds-trigger-button"
        onPress={() => {
          AppcuesWrapper.track('show-embed');
        }}
      />
      <Text style={styles.useCases} testID="embeds-use-cases-header">
        Use Cases
      </Text>
      <AppcuesWrapper.WrappedAppcuesFrameView frameID="embeds-use-cases" />
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

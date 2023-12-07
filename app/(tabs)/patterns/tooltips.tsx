import { StyleSheet } from 'react-native';

import * as AppcuesWrapper from '../../../components/AppcuesWrapper';
import Overview from '../../../components/Overview';
import { ScrollView, Text } from '../../../components/Themed';
import { useLocale } from '../../../context/locale';

export default function Tooltips() {
  const { language, strings } = useLocale();

  return (
    <ScrollView>
      <Overview
        title={strings[language].tooltips.overview}
        callToAction={strings[language].tooltips.callToAction}
        testID="tooltips-trigger-button"
        onPress={() => {
          AppcuesWrapper.track('show-tooltip');
        }}
      />
      <Text style={styles.useCases} testID="tooltips-use-cases-header">
        Use Cases
      </Text>
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

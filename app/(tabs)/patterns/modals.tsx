import * as Appcues from '@appcues/react-native';
import { StyleSheet } from 'react-native';

import Overview from '../../../components/Overview';
import { ScrollView, Text } from '../../../components/Themed';
import { useLocale } from '../../../context/locale';

export default function Modals() {
  const { language, strings } = useLocale();

  return (
    <ScrollView>
      <Overview
        title={strings[language].modals.overview}
        callToAction={strings[language].modals.callToAction}
        testID="modals-trigger-button"
        onPress={() => {
          Appcues.track('show-modal');
        }}
      />
      <Text style={styles.useCases} testID="modals-use-cases-header">
        {strings[language].patterns.useCases}
      </Text>
      <Appcues.AppcuesFrameView frameID="modals-use-cases" />
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

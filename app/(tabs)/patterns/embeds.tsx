import * as Appcues from '@appcues/react-native';
import { StyleSheet } from 'react-native';

import Overview from '../../../components/Overview';
import { ScrollView, Text } from '../../../components/Themed';
import { useLocale } from '../../../context/locale';

export default function Embeds() {
  const { language, strings } = useLocale();

  return (
    <ScrollView>
      <Appcues.AppcuesFrameView frameID="embeds-banner" />
      <Overview
        title={strings[language].embeds.overview}
        callToAction={strings[language].embeds.callToAction}
        testID="embeds-trigger-button"
        onPress={() => {
          Appcues.track('show-embed');
        }}
      />
      <Text style={styles.useCases} testID="embeds-use-cases-header">
        {strings[language].patterns.useCases}
      </Text>
      <Appcues.AppcuesFrameView frameID="embeds-use-cases" />
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

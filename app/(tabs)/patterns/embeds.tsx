import { StyleSheet } from 'react-native';

import * as AppcuesWrapper from '../../../components/AppcuesWrapper';
import Overview from '../../../components/Overview';
import { ScrollView, Text } from '../../../components/Themed';
import { useLocale } from '../../../context/locale';

export default function Embeds() {
  const { language, strings } = useLocale();

  return (
    <ScrollView>
      <AppcuesWrapper.WrappedAppcuesFrameView frameID="embeds-banner" />
      <Overview
        title={strings[language].tooltips.overview}
        callToAction={strings[language].tooltips.callToAction}
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

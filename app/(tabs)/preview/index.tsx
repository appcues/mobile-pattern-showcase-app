import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';
import { useLocale } from '../../../context/locale';

export default function Preview() {
  const { language, strings } = useLocale();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{strings[language].preview.p1}</Text>
      <Image
        source={require('../../../assets/images/flow-preview-modal.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{strings[language].preview.p2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 17,
    marginBottom: 10,
  },
  image: {
    width: 220,
    height: 275,
    marginBottom: 10,
  },
});

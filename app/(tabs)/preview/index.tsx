import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';

export default function Preview() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        The Appcues Mobile Builder allows you to easily use a deep link to
        preview your flows in your app:
      </Text>
      <Image
        source={require('../../../assets/images/flow-preview-modal.png')}
        style={styles.image}
      />
      <Text style={styles.title}>
        If you don't have the Appcues Mobile SDK installed in your app, this app
        allows you to test out your flow.
      </Text>
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

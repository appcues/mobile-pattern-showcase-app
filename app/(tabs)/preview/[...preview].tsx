import { previewAppcuesExperience } from 'appcues-custom-previewer';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';

export default function PreviewDetail() {
  const { preview, locale_id } = useLocalSearchParams<{
    preview: string[];
    locale_id: string;
  }>();

  const [status, setStatus] = useState<string>('Loading');

  useEffect(() => {
    if (preview?.length === 3) {
      previewAppcuesExperience(
        preview[0],
        preview[1],
        preview[2],
        locale_id
      ).then((result) => {
        setStatus(result ? 'Loaded' : 'Error');
      });
    } else {
      setStatus('Bad link');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the preview screen.</Text>
      <Text style={styles.detail}>Status: {status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  detail: {
    marginTop: 15,
    paddingVertical: 15,
    fontSize: 14,
  },
});

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { View as PlainView, StyleSheet, TouchableOpacity } from 'react-native';

import { WrappedAppcuesFrameView } from '../../../components/AppcuesWrapper';
import * as AppcuesWrapper from '../../../components/AppcuesWrapper';
import PrimaryButton from '../../../components/PrimaryButton';
import { ScrollView, Text, View } from '../../../components/Themed';
import { shadow } from '../../../constants/Brand';
import { useAuth } from '../../../context/auth';
import { useLocale } from '../../../context/locale';

export default function Examples() {
  const { email, signOut } = useAuth();
  const { language, strings } = useLocale();

  return (
    <ScrollView>
      <WrappedAppcuesFrameView frameID="more-root" />
      <View
        style={styles.card}
        level="secondaryBackground"
        testID="sign-out-card"
      >
        <PlainView style={styles.profileRow}>
          <FontAwesome size={34} name="user" />
          <PlainView>
            <Text style={styles.email}>{email}</Text>
            <TouchableOpacity onPress={() => signOut()}>
              <Text style={styles.link}>{strings[language].more.signOut}</Text>
            </TouchableOpacity>
          </PlainView>
        </PlainView>
      </View>
      <View
        style={styles.card}
        level="secondaryBackground"
        testID="debugger-card"
      >
        <Text>{strings[language].more.debugger}</Text>
        <PrimaryButton
          onPress={() => {
            AppcuesWrapper.debug();
          }}
          title={strings[language].more.debuggerButton}
        />
      </View>
      <View
        style={styles.card}
        level="secondaryBackground"
        testID="colophon-card"
      >
        <Text style={styles.colophonText}>
          {strings[language].more.colophon + '\n'}
          <Link href="https://github.com/appcues/mobile-pattern-showcase-app">
            {strings[language].more.sourceLink}
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 20,
    gap: 10,
    borderRadius: 6,
    ...shadow.elevation200,
  },
  link: {
    color: '#5c5cff',
  },
  profileRow: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  email: {
    flex: 1,
  },
  colophonText: {
    fontFamily: 'Mulish-Italic',
    textAlign: 'center',
  },
});

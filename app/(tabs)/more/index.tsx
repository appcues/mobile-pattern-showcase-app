import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { View as PlainView, StyleSheet, TouchableOpacity } from 'react-native';

import { WrappedAppcuesFrameView } from '../../../components/AppcuesWrapper';
import * as AppcuesWrapper from '../../../components/AppcuesWrapper';
import PrimaryButton from '../../../components/PrimaryButton';
import { ScrollView, Text, View } from '../../../components/Themed';
import { shadow } from '../../../constants/Brand';
import { useAuth } from '../../../context/auth';

export default function Examples() {
  const { email, signOut } = useAuth();

  return (
    <ScrollView>
      <WrappedAppcuesFrameView frameID="more-root" />
      <View style={styles.card} level="secondaryBackground">
        <PlainView style={styles.profileRow}>
          <FontAwesome size={34} name="user" />
          <Text style={styles.email}>{email}</Text>
          <TouchableOpacity onPress={() => signOut()}>
            <Text style={styles.link}>Sign Out</Text>
          </TouchableOpacity>
        </PlainView>
      </View>
      <View style={styles.card} level="secondaryBackground">
        <Text>
          The Appcues debugger is an in-app overlay that provides debug
          information in an accessible manner.
        </Text>
        <PrimaryButton
          onPress={() => {
            AppcuesWrapper.debug();
          }}
          title="Launch the debugger"
        />
      </View>
      <View style={styles.card} level="secondaryBackground">
        <Text style={styles.colophonText}>
          This app is created using React Native, Expo, and the Appcues Mobile
          SDK.{'\n'}
          <Link href="https://github.com/appcues/mobile-pattern-showcase-app">
            MIT Licensed and source available.
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

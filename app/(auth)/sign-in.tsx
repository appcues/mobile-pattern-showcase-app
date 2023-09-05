import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Logo from '../../assets/images/logo.svg';
import OutlinedTextInput from '../../components/OutlinedTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import { gradient } from '../../constants/Brand';
import { useAuth } from '../../context/auth';

export default function SignIn() {
  const { signIn } = useAuth();
  const [emailAddress, onChangeEmailAddress] = useState('');

  return (
    <LinearGradient colors={gradient.babyHaze} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.contentBox}>
          <Logo width="145" height="30" style={{ alignSelf: 'center' }} />
          <Text style={styles.title}>Appcues Mobile Pattern Showcase</Text>
          <OutlinedTextInput
            onChangeText={onChangeEmailAddress}
            placeholder="Work email"
            value={emailAddress}
          />
          <PrimaryButton
            onPress={() => {
              console.log('SIGN IN', emailAddress);
              signIn(emailAddress);
            }}
            title="Continue"
          />
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#F5F7FA',
  },
  contentBox: {
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 20,
    padding: 42,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 40,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
  },
});

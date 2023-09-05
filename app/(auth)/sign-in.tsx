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
import { gradient, shadows } from '../../constants/Brand';
import { useAuth } from '../../context/auth';

export default function SignIn() {
  const { signIn } = useAuth();
  const [emailAddress, onChangeEmailAddress] = useState('');
  const [canShowError, setCanShowError] = useState(false);

  function isValid(): boolean {
    // naive email regex
    return /.+@.+\..+/.test(emailAddress);
  }

  function submit(): void {
    if (isValid()) {
      signIn(emailAddress);
    }
    setCanShowError(true);
  }

  return (
    <LinearGradient colors={gradient.babyHaze} style={styles.container}>
      <LinearGradient
        colors={gradient.moodLighting}
        style={styles.backdropDecoration}
      />
      <Logo width="145" height="30" style={{ marginBottom: 20 }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.contentBox}>
          <Text style={styles.title}>Mobile Pattern Showcase</Text>
          <OutlinedTextInput
            onChangeText={onChangeEmailAddress}
            onBlur={() => setCanShowError(true)}
            placeholder="Work email"
            value={emailAddress}
            keyboardType="email-address"
            textContentType="emailAddress"
            returnKeyType="done"
            enablesReturnKeyAutomatically
            onSubmitEditing={submit}
            error={canShowError && !isValid()}
          />
          {canShowError && !isValid() && (
            <Text style={styles.errorText}>
              Please enter your email address.
            </Text>
          )}
          <PrimaryButton onPress={submit} title="Continue" />
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdropDecoration: {
    position: 'absolute',
    top: '55%',
    left: '-50%',
    width: '200%',
    aspectRatio: 1,
    backgroundColor: '#ff0000',
    opacity: 0.3,
    borderRadius: 1000,
  },
  contentBox: {
    alignSelf: 'stretch',
    maxWidth: 400,
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 20,
    marginHorizontal: 20,
    padding: 42,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    ...shadows.elevation100,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
  },
  errorText: {
    color: '#dd2270',
    fontFamily: 'Mulish-Regular',
  },
});

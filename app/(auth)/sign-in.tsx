import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import Logo from '../../assets/images/logo.svg';
import { Rays, Waves } from '../../components/Decoration';
import OutlinedTextInput from '../../components/OutlinedTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import { Text } from '../../components/Themed';
import { color, gradient, shadow } from '../../constants/Brand';
import { useAuth } from '../../context/auth';
import { useLocale } from '../../context/locale';

export default function SignIn() {
  const colorScheme = useColorScheme();
  const { signIn } = useAuth();
  const { language, strings } = useLocale();
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
    <LinearGradient
      colors={colorScheme === 'light' ? gradient.babyHaze : gradient.regulus}
      style={styles.container}
    >
      <LinearGradient
        colors={
          colorScheme === 'light' ? gradient.moodLighting : gradient.regulus
        }
        style={styles.backdropDecoration}
      />
      <Logo
        width="145"
        height="30"
        fill={colorScheme === 'light' ? '#242a35' : '#ffffff'}
        style={{ marginBottom: 20 }}
      />
      <Waves scale={0.5} style={styles.waves} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.formWrapper}
      >
        <View style={styles.formContainer}>
          <Rays scale={0.33} style={styles.rays} />
          <View
            style={[
              styles.contentBox,
              colorScheme === 'light'
                ? styles.contentBoxLight
                : styles.contentBoxDark,
            ]}
          >
            <Text style={styles.title}>{strings[language].signIn.title}</Text>
            <OutlinedTextInput
              onChangeText={onChangeEmailAddress}
              onBlur={() => setCanShowError(true)}
              placeholder={strings[language].signIn.input}
              value={emailAddress}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              returnKeyType="done"
              enablesReturnKeyAutomatically
              onSubmitEditing={submit}
              error={canShowError && !isValid()}
            />
            {canShowError && !isValid() && (
              <Text style={styles.errorText}>
                {strings[language].signIn.inputError}
              </Text>
            )}
            <PrimaryButton
              onPress={submit}
              title={strings[language].signIn.button}
            />
          </View>
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
    opacity: 0.3,
    borderRadius: 1000,
  },
  waves: {
    position: 'absolute',
    left: 0,
    marginLeft: -100,
    bottom: '10%',
  },
  rays: {
    position: 'absolute',
    top: -20,
    right: -20,
    transform: [{ rotate: '22deg' }],
  },
  formWrapper: {
    flexDirection: 'row',
  },
  formContainer: {
    flex: 1,
    maxWidth: 400,
    marginHorizontal: 30,
  },
  contentBox: {
    justifyContent: 'center',
    gap: 20,
    padding: 42,
    borderRadius: 6,
  },
  contentBoxLight: {
    backgroundColor: color.neutral0,
    ...shadow.elevation100,
  },
  contentBoxDark: {
    backgroundColor: color.neutral900,
    borderWidth: 1,
    borderColor: 'rgb(113, 134, 174)',
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

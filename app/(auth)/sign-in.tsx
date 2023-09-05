import { useState } from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, View, Platform, } from 'react-native';
import { useAuth } from '../../context/auth';
import PrimaryButton from '../../components/PrimaryButton';
import OutlinedTextInput from '../../components/OutlinedTextInput';
import Logo from "../../assets/images/logo.svg";


export default function SignIn() {
  const { signIn } = useAuth();
  const [ emailAddress, onChangeEmailAddress ] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.contentBox}>
          <Logo width="145" height="30" style={{alignSelf: 'center'}} />
          <Text style={styles.title}>Appcues Mobile Pattern Showcase</Text>
          <OutlinedTextInput
            onChangeText={onChangeEmailAddress}
            placeholder="Work email"
            value={emailAddress}
          />
          <PrimaryButton
            onPress={() =>  { console.log('SIGN IN', emailAddress); signIn(emailAddress); }}
            title="Continue"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
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
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.12,
    shadowRadius: 40,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Mulish-Bold'
  },
});

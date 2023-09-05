import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface OutlinedTextInputProps extends TextInputProps {
  error?: boolean;
}

export default function OutlinedTextInput(props: OutlinedTextInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.error ? styles.error : styles.normal]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 6,
    color: '#394455',
    paddingHorizontal: 16,
    marginTop: 8,
    fontSize: 14,
    minHeight: 52,
    fontFamily: 'Mulish-Regular',
  },
  normal: {
    borderColor: '#C2C8D1',
  },
  error: {
    borderColor: '#dd2270',
  },
});

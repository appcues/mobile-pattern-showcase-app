import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export default function OutlinedTextInput(props: TextInputProps) {
  return (
    <TextInput {...props} style={styles.input} />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#C2C8D1',
    color: '#394455',
    paddingHorizontal: 16,
    marginTop: 8,
    fontSize: 14,
    minHeight: 52,
  },
});

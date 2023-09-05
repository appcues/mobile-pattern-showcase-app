import {
  StyleSheet,
  TextInput,
  TextInputProps,
  useColorScheme,
} from 'react-native';

import { color } from '../constants/Brand';

interface OutlinedTextInputProps extends TextInputProps {
  error?: boolean;
}

export default function OutlinedTextInput(props: OutlinedTextInputProps) {
  const colorScheme = useColorScheme();

  return (
    <TextInput
      {...props}
      style={[
        styles.input,
        {
          color: colorScheme === 'light' ? color.neutral800 : color.neutral0,
          borderColor: props.error ? '#dd2270' : '#C2C8D1',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 16,
    marginTop: 8,
    fontSize: 14,
    minHeight: 52,
    fontFamily: 'Mulish-Regular',
  },
});

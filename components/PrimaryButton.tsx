import { Text, StyleSheet, Pressable, ButtonProps } from 'react-native';

export default function PrimaryButton(props: ButtonProps) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress} accessibilityRole='button'>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: '#5c5cff',
    elevation: 3,
    minHeight: 52,
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

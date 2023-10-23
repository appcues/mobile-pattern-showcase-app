import {
  ButtonProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function PrimaryButton(props: ButtonProps) {
  const { onPress, title = 'Save' } = props;
  return (
    <View style={styles.buttonWrap}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        accessibilityRole="button"
        testID={props.testID}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: '#5c5cff',
    borderRadius: 6,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    minHeight: 52,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Mulish-SemiBold',
  },
});

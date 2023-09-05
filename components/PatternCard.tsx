import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type PatternCardProps = {
  title: string;
  style?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export default function PatternCard(props: PatternCardProps) {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...props.style }}
      onPress={props.onPress}
    >
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 42,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ff0000',
  },
});

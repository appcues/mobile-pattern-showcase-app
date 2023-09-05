import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { shadow } from '../constants/Brand';

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
    ...shadow.elevation200,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Mulish-Bold',
    color: '#5c5cff',
  },
});

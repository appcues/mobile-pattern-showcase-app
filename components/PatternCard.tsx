import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';

import { Text, View as ThemedView } from './Themed';
import { shadow } from '../constants/Brand';

type PatternCardProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  style?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  testID?: string;
};

export default function PatternCard(props: PatternCardProps) {
  return (
    <TouchableHighlight
      style={{ ...styles.container, ...props.style }}
      onPress={props.onPress}
      testID={props.testID}
    >
      <ThemedView style={styles.inner} level="secondaryBackground">
        <Image source={props.image} style={styles.image} />
        <View style={styles.detail}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle} level="tertiaryForeground">
            {props.subtitle}
          </Text>
        </View>
      </ThemedView>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    ...shadow.elevation200,
  },
  inner: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  detail: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Mulish-Bold',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    paddingVertical: 8,
  },
});

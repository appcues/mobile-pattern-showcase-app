import { LinearGradient } from 'expo-linear-gradient';
import {
  GestureResponderEvent,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import { Rays } from './Decoration';
import PrimaryButton from './PrimaryButton';
import { Text } from './Themed';
import { gradient } from '../constants/Brand';

type OverviewProps = {
  title: string;
  callToAction: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  testID: string;
};

export default function Overview(props: OverviewProps) {
  const colorScheme = useColorScheme();

  return (
    <LinearGradient
      colors={colorScheme === 'light' ? gradient.babyHaze : gradient.regulus}
      style={styles.container}
    >
      <Text style={styles.overview}>{props.title}</Text>
      <View>
        <Rays scale={0.33} style={styles.rays} />
        <PrimaryButton
          onPress={props.onPress}
          title={props.callToAction}
          testID={props.testID}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  overview: {
    fontSize: 20,
    textAlign: 'center',
  },
  rays: {
    position: 'absolute',
    top: -20,
    right: -20,
    transform: [{ rotate: '22deg' }],
  },
});

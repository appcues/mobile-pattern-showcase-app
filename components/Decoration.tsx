import { StyleSheet, useColorScheme } from 'react-native';
import { SvgProps } from 'react-native-svg';

import RaysSVG from '../assets/images/decorations/rays.svg';
import WavesSVG from '../assets/images/decorations/waves.svg';

type DecorationProps = Omit<SvgProps, 'width' | 'height'> & { scale?: number };

export function Rays(props: DecorationProps) {
  const colorScheme = useColorScheme();

  return (
    <RaysSVG
      {...props}
      width={120 * (props.scale ?? 1)}
      height={120 * (props.scale ?? 1)}
      style={[
        props.style,
        colorScheme === 'light' ? styles.light : styles.dark,
      ]}
    />
  );
}

export function Waves(props: DecorationProps) {
  const colorScheme = useColorScheme();

  return (
    <WavesSVG
      {...props}
      width={646 * (props.scale ?? 1)}
      height={276 * (props.scale ?? 1)}
      style={[
        props.style,
        colorScheme === 'light' ? styles.light : styles.dark,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  light: {},
  dark: {
    opacity: 0.5,
  },
});

/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  ScrollView as DefaultScrollView,
  Text as DefaultText,
  View as DefaultView,
  useColorScheme,
} from 'react-native';

import Themes from '../constants/Themes';

type BackgroundVariantProps = {
  level?: 'primaryBackground' | 'secondaryBackground' | 'tertiaryBackground';
};

type ForegroundVariantProps = {
  level?: 'primaryForeground' | 'secondaryForeground' | 'tertiaryForeground';
};

export type TextProps = ForegroundVariantProps & DefaultText['props'];
export type ViewProps = BackgroundVariantProps & DefaultView['props'];
export type ScrollViewProps = DefaultScrollView['props'];

export function useThemeColor(
  colorName: keyof typeof Themes.light & keyof typeof Themes.dark
) {
  const theme = useColorScheme() ?? 'light';

  return Themes[theme][colorName];
}

export function Text(props: TextProps) {
  const { style, level, ...otherProps } = props;
  const color = useThemeColor(level ?? 'primaryForeground');

  return (
    <DefaultText
      style={[
        { color, fontFamily: 'Mulish-Regular', textAlign: 'left' },
        style,
      ]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, level, ...otherProps } = props;
  const backgroundColor = useThemeColor(level ?? 'primaryBackground');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, ...otherProps } = props;
  const backgroundColor = useThemeColor('primaryBackground');

  return (
    <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

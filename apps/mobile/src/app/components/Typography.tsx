import { ColorName, getColor } from '@utils/colors';
import { StyleSheet, Text, TextProps } from 'react-native';

type TypographySize = keyof typeof modularScale;

interface TypographtProps extends TextProps {
  theme?: ColorName;
  size?: TypographySize;
}

export default function Typography({
  theme = 'onBackground',
  size = 'body',
  style,
  ...textProps
}: TypographtProps) {
  const styles = getStyles(size, theme);

  return (
    <Text style={StyleSheet.compose(styles.text, style)} {...textProps}></Text>
  );
}

const modularScale = {
  title: {
    fontSize: 42,
    lineHeight: 50.4,
  },
  'sub-title': {
    fontSize: 26,
    lineHeight: 31.2,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    lineHeight: 14.4,
  },
};

const getStyles = (size: TypographySize, color: ColorName) =>
  StyleSheet.create({
    text: {
      fontFamily: 'Montserrat',
      color: getColor(color),
      ...modularScale[size],
    },
  });

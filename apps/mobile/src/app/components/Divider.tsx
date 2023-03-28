import {
  ColorName,
  ColorScale,
  ColorVar,
  colorVariant,
  grayScale,
} from '@utils/colors';
import { StyleSheet, View, ViewProps } from 'react-native';

type DividerColor = ColorVar | ColorScale | ColorName;
interface DividerProps extends Pick<ViewProps, 'style'> {
  color?: DividerColor;
}

export default function Divider({ color, style }: DividerProps) {
  return <View style={StyleSheet.compose(styles(color).divider, style)}></View>;
}

const styles = (color: DividerColor = 300) =>
  StyleSheet.create({
    divider: {
      width: 1,
      backgroundColor:
        typeof color === 'number' ? grayScale(color) : colorVariant(color),
      borderRadius: 8,
      marginVertical: 4,
      height: 12,
    },
  });

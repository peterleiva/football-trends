import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, getColor, Themes } from '../App.style';

interface ButtonProps {
  theme: Themes;
  style?: any;
  children?: React.ReactNode;
}

export default function Button({
  style,
  theme,
  children,
  ...btnProps
}: ButtonProps) {
  const theming = getTheme(theme);

  return (
    <TouchableOpacity
      style={[baseStyles.btn, theming.btn, style]}
      {...btnProps}
    >
      <View>
        <Text style={[baseStyles.text, theming.label]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const baseStyles = StyleSheet.create({
  btn: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const themes = (color: Themes) => {
  return {
    btn: {
      backgroundColor: getColor(color),
    },
    label: {
      color: COLORS.onForeground,
    },
  };
};

const getTheme = (theme: Themes) => StyleSheet.create(themes(theme));

type Theme<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>> =
  { [P in keyof T]: Parameters<typeof StyleSheet.create> };

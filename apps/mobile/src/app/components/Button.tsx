import { getColor, Themes } from '@utils';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
      color: getColor('onBackground'),
    },
  };
};

const getTheme = (theme: Themes) => StyleSheet.create(themes(theme));

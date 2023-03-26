import {
  ButtonProps as NativeButtonProps,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextProps,
} from 'react-native';

interface ButtonProps {
  theme: keyof typeof themes;
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
    <Pressable style={[baseStyles.btn, theming.btn, style]} {...btnProps}>
      <Text style={[baseStyles.text, theming.label]}>{children}</Text>
    </Pressable>
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

const themes = {
  accent: {
    btn: {
      backgroundColor: '#FFD166',
    },
    label: {
      color: 'white',
    },
  },
};

const getTheme = (theme: keyof typeof themes) =>
  StyleSheet.create(themes[theme]);

type Theme<T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>> =
  { [P in keyof T]: Parameters<typeof StyleSheet.create> };

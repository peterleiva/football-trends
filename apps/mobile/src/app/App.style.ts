import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#2B2D42',
    flex: 1,
    padding: 40,
  },
  btn: {
    position: 'absolute',
    bottom: -48,
    right: -48,
    borderRadius: 0,
    borderBottomRightRadius: 28,
    borderTopLeftRadius: 6,
  },
  optionList: {
    marginBottom: 24,
  },
  container: {
    color: 'white',
    padding: 24,
    gap: 15,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  timer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
    alignSelf: 'center',
    flexGrow: 1,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
  },
});

type ColorScale = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export const grayScale = (scale: ColorScale) =>
  ({
    100: '#F2F2F2',
    200: '#D9D9D9',
    300: '#BFBFBF',
    400: '#A6A6A6',
    500: '#8D8D8D',
    600: '#737373',
    700: '#595959',
    800: '#404040',
    900: '#262626',
  }[scale]);

export const COLORS = {
  primary: '#00A8CC',
  secondary: '#F26B6B',
  accent: '#FFD166',
  onForeground: '#FFFFFF',
  onBackground: '#606060',
  gray: '#CCCCCC',

  success: '#4BB543',
  danger: '#FF4136',
  warning: '#FF851B',
  info: '#0074D9',
};

export const getColor = (
  color: keyof typeof COLORS,
  variant?: 'dark' | 'light'
) => {
  if (!variant) {
    return COLORS[color];
  }

  return {
    dark: {
      primary: '#007790',
      secondary: '#B84B4B',
      accent: '#E6B800',
      onForeground: '#C2C2C2',
      onBackground: '#1B1E2B',
      gray: grayScale(800),
      success: '#2E8B2E',
      danger: '#B90000',
      warning: '#C76600',
      info: '#005DA3',
    },
    light: {
      primary: '#5CCFE6',
      secondary: '#FF8F8F',
      accent: '#FFF699',
      onForeground: '#4D4D4D',
      onBackground: '#3E3F4A',
      gray: grayScale(100),
      success: '#C6FFC6',
      danger: '#FFCACA',
      warning: '#FFE5B2',
      info: '#B2D4FF',
    },
  }[variant][color];
};

export type Themes = keyof Omit<typeof COLORS, 'onForeground' | 'onBackground'>;

export default styles;

export type ColorName = keyof typeof COLORS;

export type ColorVariant = 'dark' | 'light';

export type ColorScale = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorShades = Record<ColorScale, string>;

export type Themes = keyof Omit<
  typeof COLORS,
  'onForeground' | 'onBackground' | 'background'
>;

const grayShades: ColorShades = {
  100: '#F2F2F2',
  200: '#D9D9D9',
  300: '#BFBFBF',
  400: '#A6A6A6',
  500: '#8D8D8D',
  600: '#737373',
  700: '#595959',
  800: '#404040',
  900: '#262626',
};

const COLORS = {
  primary: '#00A8CC',
  secondary: '#F26B6B',
  accent: '#FFD166',
  background: '#2B2D42',
  onForeground: '#2B2D42',
  onBackground: '#FFFFFF',
  gray: '#CCCCCC',

  success: '#4BB543',
  danger: '#FF4136',
  warning: '#FF851B',
  info: '#0074D9',
};

export const grayScale = (scale: ColorScale) => grayShades[scale];

const COLOR_VARIANTS = {
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
    background: '#E2E0C8',
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
    background: '#4A4E67',
  },
};

export const getColor = (
  color: keyof typeof COLORS,
  variant?: 'dark' | 'light'
) => {
  if (!variant) {
    return COLORS[color];
  }

  return COLOR_VARIANTS[variant][color];
};

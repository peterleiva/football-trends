import {
  StyleSheet,
  Text as NativeText,
  TextProps as NativeTextProps,
} from 'react-native';

type TextProps = NativeTextProps;

export default function Text({ style, ...textProps }: TextProps) {
  return <NativeText style={[styles.text, style]} {...textProps}></NativeText>;
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

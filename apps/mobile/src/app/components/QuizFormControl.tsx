import { useRef } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import styles from './QuizFormControl.style';

type QuizInputProps = TextInputProps;

export function QuizFormControl({
  children,
  style,
  ...inputProps
}: QuizInputProps): JSX.Element {
  const inputRef = useRef<TextInput>(null);

  const pressHandler = (e: GestureResponderEvent) => {
    inputRef.current?.focus();
  };

  return (
    <Pressable onPress={pressHandler}>
      <View>
        <Text style={styles.title}>{children}</Text>
        <TextInput
          {...inputProps}
          style={[styles.input, style]}
          ref={inputRef}
          blurOnSubmit={false}
        />
      </View>
    </Pressable>
  );
}

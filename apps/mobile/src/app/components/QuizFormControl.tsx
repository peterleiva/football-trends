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
import QuizInput from './QuizInput';

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
        <QuizInput ref={inputRef} {...inputProps}></QuizInput>
      </View>
    </Pressable>
  );
}

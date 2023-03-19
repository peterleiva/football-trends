import { ReactNode, useRef } from 'react';
import {
  GestureResponderEvent,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './QuizInput.style';

type QuizInputProps = TextInputProps;

export function QuizInput({
  children,
  style,
  ...inputProps
}: QuizInputProps): JSX.Element {
  const inputRef = useRef<TextInput>(null);

  const pressHandler = (e: GestureResponderEvent) => {
    inputRef.current?.focus();
  };

  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      <>
        <Text style={styles.title}>{children}</Text>
        <TextInput
          {...inputProps}
          style={[style, styles.input]}
          ref={inputRef}
          blurOnSubmit={false}
        />
      </>
    </TouchableWithoutFeedback>
  );
}

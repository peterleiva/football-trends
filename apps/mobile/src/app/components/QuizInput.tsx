import { forwardRef } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import styles from './QuizFormControl.style';

type QuizInputProps = TextInputProps & {
  onClear?: () => void;
};

export default function QuizInput({
  style,
  onClear,
  ...inputProps
}: QuizInputProps) {
  return (
    <View style={inputStyle.container}>
      <TextInput
        {...inputProps}
        style={[inputStyle.input, style]}
        blurOnSubmit={false}
      />
      <View style={inputStyle.clear}>
        <Button title="clear" onPress={onClear}></Button>
      </View>
    </View>
  );
}

const inputStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  clear: {
    position: 'absolute',
    right: 12,
    top: '20%',
  },
  input: {
    borderColor: '#BDBDBD',
    borderRadius: 12,
    borderWidth: 2,
    padding: 16,
    paddingRight: 74,
    fontSize: 16,
  },
});

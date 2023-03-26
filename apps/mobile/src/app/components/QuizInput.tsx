import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type QuizInputProps = TextInputProps & {
  onClear?: () => void;
  showClearBtn?: boolean;
};

// TODO: usar adornments

export default function QuizInput({
  style,
  onClear,
  showClearBtn = true,
  ...inputProps
}: QuizInputProps) {
  return (
    <View style={inputStyle.container}>
      <TextInput {...inputProps} style={[inputStyle.input, style]} />
      <View style={inputStyle.clear}>
        {showClearBtn && (
          <MaterialIcons.Button
            name="clear-all"
            backgroundColor="unset"
            color="black"
            onPress={onClear}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size={24}
          ></MaterialIcons.Button>
        )}
      </View>
    </View>
  );
}

const inputStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  clear: {
    position: 'absolute',
    right: 12,
  },
  input: {
    outline: 'none',
    outlineColor: 'transparent',
    underlineColorAndroid: 'transparent',
    borderColor: '#BDBDBD',
    borderRadius: 12,
    borderWidth: 2,
    padding: 16,
    paddingRight: 60,
    fontSize: 16,
    width: '100%',
  },
});

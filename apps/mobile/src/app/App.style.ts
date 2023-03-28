import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

export default styles;

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
  option: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionTitle: {
    fontWeight: 'bold',
    marginLeft: 12,
  },
  optionNumber: {
    marginRight: 12,
    fontWeight: 'bold',
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

export default styles;

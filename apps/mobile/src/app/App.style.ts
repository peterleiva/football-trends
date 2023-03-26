import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#2B2D42',
    flex: 1,
    padding: 40,
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
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
  },
});

export default styles;

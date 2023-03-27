import { StyleSheet, View } from 'react-native';

export default function Divider() {
  return <View style={styles.divider}></View>;
}

const styles = StyleSheet.create({
  divider: {
    width: 1,
    backgroundColor: '#C1BDBD',
    borderRadius: 8,
    marginVertical: 10,
    height: 12,
  },
});

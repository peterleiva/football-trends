import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title} selectable>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 100,
    borderRadius: 28,
    backgroundColor: '#fff',
    padding: 34,
  },
  title: {
    fontSize: 26,
    color: '#2B2D42',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
});

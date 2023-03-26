import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
  children?: React.ReactNode;
  renderTimer?: () => React.ReactNode;
}

export default function Card({ title, children, renderTimer }: CardProps) {
  return (
    <View style={styles.card}>
      {renderTimer && <View style={styles.timer}>{renderTimer()}</View>}
      <Text style={styles.title} selectable>
        {title}
      </Text>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 100,
    borderRadius: 28,
    backgroundColor: '#fff',
    padding: 48,
    position: 'relative',
  },
  title: {
    fontSize: 26,
    color: '#2B2D42',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timer: {
    marginBottom: 24,
  },
});

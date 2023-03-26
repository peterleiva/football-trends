import { StyleSheet, View } from 'react-native';
import Text from './Text';

type ScoreLabelProps = {
  points: number;
};

export default function ScoreLabel({ points }: ScoreLabelProps) {
  return (
    <View style={styles.score}>
      <Text style={styles.points}>{points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    padding: 5,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 24,
    minWidth: 48,
  },
  points: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    fontSize: 16,
    textAlign: 'center',
  },
});

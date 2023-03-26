import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Text from './Text';

type ScoreLabelProps = {
  points: number;
};

export default function ScoreLabel({ points }: ScoreLabelProps) {
  return (
    <View style={styles.score}>
      <Entypo name="sports-club" size={16} color="white" />
      <Text style={styles.points}>{points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    padding: 4,
    paddingHorizontal: 14,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 24,
    minWidth: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 8,
  },
});

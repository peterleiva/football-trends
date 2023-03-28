import { Entypo } from '@expo/vector-icons';
import { getColor } from '@utils/colors';
import { StyleSheet, View } from 'react-native';
import Typography from './Typography';

type ScoreLabelProps = {
  points: number;
};

export default function ScoreLabel({ points }: ScoreLabelProps) {
  return (
    <View style={styles.score}>
      <Entypo name="sports-club" size={16} color="white" />
      <Typography style={styles.points}>{points}</Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    padding: 4,
    paddingHorizontal: 14,
    borderColor: getColor('onBackground'),
    borderWidth: 1,
    borderRadius: 24,
    minWidth: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 8,
  },
});

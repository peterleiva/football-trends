import { Text, View } from 'react-native';
import { useCountdown } from '@utils';

interface TimerProps {
  countdown?: number; // in miliseconds
}

export function Timer({ countdown }: TimerProps): JSX.Element {
  const { timeInSeconds } = useCountdown({ time: countdown });

  return (
    <View>
      <Text>{timeInSeconds}s</Text>
    </View>
  );
}

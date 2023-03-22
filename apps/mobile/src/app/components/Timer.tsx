import { Text, View, ViewProps } from 'react-native';
import { useCountdown } from '@utils';

interface TimerProps {
  countdown?: number; // in miliseconds
  style?: ViewProps['style'];
}

export function Timer({ countdown, style }: TimerProps): JSX.Element {
  const { timeInSeconds } = useCountdown({ time: countdown });

  return (
    <View style={style}>
      <Text>{timeInSeconds}s</Text>
    </View>
  );
}

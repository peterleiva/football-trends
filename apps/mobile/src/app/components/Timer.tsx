import { View } from 'react-native';

interface TimerProps {
  progress: number;
}

export function Timer({ progress }: TimerProps): JSX.Element {
  return <View>{progress}</View>;
}

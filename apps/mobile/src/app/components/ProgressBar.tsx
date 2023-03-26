import { View } from 'react-native';

// TODO: ver tamanho ideal para width

interface ProgressBarProps {
  progress: number; // number between 0 and 100
}

const LIMIT = {
  max: 100,
  min: 0,
};

export default function ProgressBar({ progress }: ProgressBarProps) {
  const percent = Math.min(Math.max(progress, LIMIT.min), LIMIT.max) / 100;
  const width = 190 * percent;

  return (
    <View>
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="10">
        <rect width="200" height="10" fill="#F26B6B" rx="4" />
        <rect width={width} height="5" x="5" y="3" fill="#FFD166" rx="4" />
      </svg>
    </View>
  );
}

// const styles = StyleSheet.create({});

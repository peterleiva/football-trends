import { Rect, Svg } from 'react-native-svg';

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
  const width = 100 * percent + '%';

  return (
    <Svg width="100%" height={10}>
      <Rect width="100%" height="10" fill="#F26B6B" rx="4"></Rect>
      <Rect width={width} height="5" x="5" y="3" fill="#FFD166" rx="4"></Rect>
    </Svg>
  );
}

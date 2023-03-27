import { useEffect, useRef, useState } from 'react';

type UseCountdownProps = Partial<{
  time: number;
  updateRate: number;
  stopAtEnd: boolean;
  onEnd: () => void;
}>;

export function useCountdown({
  time = 5_000,
  updateRate = 1_000,
  stopAtEnd = true,
  onEnd,
}: UseCountdownProps = {}) {
  if (time < 0) {
    throw new Error('countdown must be positive');
  }

  const endDate = useRef<number>(Date.now() + time);
  const [countdown, setCountdown] = useState<number>(
    endDate.current - Date.now()
  );

  if (countdown <= 0) {
    onEnd?.();
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(endDate.current - Date.now());
    }, updateRate);

    let timeId: NodeJS.Timeout;

    if (stopAtEnd) {
      timeId = setTimeout(() => {
        clearInterval(intervalId);
      }, time);
    }

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeId);
    };
  }, [updateRate, endDate, time, stopAtEnd]);

  return {
    counter: countdown,
    timeInSeconds: Math.round(countdown / 1_000),
  };
}

import { useRouter } from 'next/router';

export default function Player() {
  const {
    query: { id: playerId },
  } = useRouter();

  return <div>Player {playerId}</div>;
}

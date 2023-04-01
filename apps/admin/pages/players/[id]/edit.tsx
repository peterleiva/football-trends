import { useRouter } from 'next/router';

export default function PlayerEdit() {
  const {
    query: { id: playerId },
  } = useRouter();

  return <div>edit player {playerId}</div>;
}

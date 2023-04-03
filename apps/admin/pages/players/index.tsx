import { useQuery } from '@apollo/client';
import { graphql } from '@football-trends/types';
const doc = graphql(`
  query GetPlayers {
    hello
  }
`);

export default function Players() {
  const { data, loading, error } = useQuery(doc);

  if (error) {
    return <div>Error loading players</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>All Players: {data.hello}</div>;
}

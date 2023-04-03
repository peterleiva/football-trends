import { useQuery } from '@apollo/client';
import { graphql } from '@football-trends/types';
import { Breadcrumbs, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Link from '../../../src/Link';

const GET_PLAYER = graphql(`
  query GetPlayer($id: ID!) {
    player(id: $id) {
      id
      name
      knownAs
    }
  }
`);

export default function PlayerEdit() {
  const {
    query: { id: playerId },
  } = useRouter();

  const { data, error, loading } = useQuery(GET_PLAYER, {
    variables: {
      id: playerId,
    },
  });

  if (error) {
    return <div>Error loading player</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid item>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/players">
              Players
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href={'/players/' + data.player.id}
            >
              {data.player.name}
            </Link>
            <Typography color="text.primary">edit</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant="h1">edit! {data.player.name}</Typography>
      </Grid>
    </Grid>
  );
}

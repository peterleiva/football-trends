import { useQuery } from '@apollo/client';
import { graphql } from '@football-trends/types';
import ModeEdit from '@mui/icons-material/ModeEdit';
import { Box, Grid } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { useRouter } from 'next/router';

const GET_PLAYERS = graphql(`
  query GetPlayers {
    players {
      id
      name
      knownAs
      club {
        name
      }
    }
  }
`);

export default function Players() {
  const { data, loading, error } = useQuery(GET_PLAYERS);
  const router = useRouter();

  if (error) {
    return <div>Error loading players</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 200,
    },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'knownAs',
      headerName: 'Known As',
    },
    {
      field: 'club.name',
      headerName: 'Club',
      valueGetter: ({ row }) => row.club?.name,
    },
    {
      field: 'actions',
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          icon={<ModeEdit />}
          onClick={() => {
            router.push('/players/' + params.id + '/edit');
          }}
          label="Edit"
          key="edit"
        />,
      ],
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box>
          <DataGrid
            autoHeight
            rows={data.players}
            columns={columns}
            pageSizeOptions={[5, 25, 50]}
            onRowClick={(params) => {
              router.push('/players/' + params.id);
            }}
          ></DataGrid>
        </Box>
      </Grid>
    </Grid>
  );
}

import React from 'react'
import { FetchData } from '../model';
import {Box,Typography} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Props {
  users: FetchData[];
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Full Name',
    width: 220,
  },
  {
    field: 'email',
    headerName: 'Email Id',
    width: 220,
  },
  {
    field: 'phone',
    headerName: 'Phone Number',
    width: 180,
  },
  {
    field: 'city',
    headerName: 'City Name',
    width: 100,
  },
  {
    field: 'zipcode',
    headerName: 'Zip Code',
    width: 100,
  },

];

const Table: React.FC<Props> = ({ users }) => {
  return (
    <>
      {
        users.length ? (
          <Box sx={{ height: 400, width: '80%', margin: 'auto' }}>
            <DataGrid
              rows={users}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
            />
          </Box>
        ) : (
          <Typography variant='h4' component='h2' sx={{color:'blue'}}>Loading data...</Typography>
        )
      }
    </>
  )
}

export default Table;
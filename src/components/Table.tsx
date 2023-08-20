import React from 'react'
import { FetchDataModel } from '../model';
import {Box,Typography} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Props {
  users: FetchDataModel[];
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID',headerClassName: 'super-app-theme--header', width: 90 },
  {
    field: 'name',
    headerClassName: 'super-app-theme--header',
    headerName: 'Full Name',
    width: 220,
  },
  {
    field: 'email',
    headerClassName: 'super-app-theme--header',
    headerName: 'Email Id',
    width: 220,
  },
  {
    field: 'phone',
    headerClassName: 'super-app-theme--header',
    headerName: 'Phone Number',
    width: 180,
  },
  {
    field: 'city',
    headerClassName: 'super-app-theme--header',
    headerName: 'City Name',
    width: 140,
  },
  {
    field: 'zipcode',
    headerClassName: 'super-app-theme--header',
    headerName: 'Zip Code',
    width: 100,
  },

];

const Table: React.FC<Props> = ({ users }) => {
  return (
    <>
      {
        users.length ? (
          <Box sx={{ height: 400, width: '80%', margin: 'auto',
          '& .super-app-theme--header': {
            backgroundColor: 'rgba(0,128,255)',
            color:'white',
          },
          }}>
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
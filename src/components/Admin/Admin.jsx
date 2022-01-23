import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

function Admin() {
  const [rows, setRows] = useState([]);  
  const wrapper = React.useRef(null);
  const feedback = useSelector(store => store.feedback);



  const columns = [
    {
      field: 'feeling',
      headerName: 'Feeling',
      type: 'number',
      width: 150,
      sortable: false,
    },
    {
      field: 'understanding',
      headerName: 'Comprehension',
      type: 'number',
      width: 150,
      sortable: false,
    },
    {
      field: 'support',
      headerName: 'Support',
      type: 'number',
      width: 150,
      sortable: false,
    },
    {
      field: 'comments',
      headerName: 'Comments',
      type: 'number',
      width: 250,
      sortable: false,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      sortable: false,
    },
  ];

  const updateData = () => {
    axios.get('/api/feedback')
      .then(res => {
        console.log(res.data)
        // considered adding the delete function call here but
        // could not figure it out...
        let newArray = (res.data)
        setRows(newArray);
        ;
      })
  }

  // trying to update the state of the data on the page
  // when feedback{} store object changes, but it dont work
  useEffect(updateData, [feedback]);

  return (
    <>
      <div className="sub-heading">
        Feedback Results
      </div>
      <Box
        ref={wrapper}
        sx={{
          alignItems: 'left',
          lineHeight: '24px',
          width: '100%',
          height: 700,
          position: 'relative',
          display: 'flex',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          disableSelectionOnClick
        />


      </Box>
    </>
  )
}

export default Admin;
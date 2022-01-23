import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button'

function Admin() {
  const wrapper = React.useRef(null);
  const feedback = useSelector(store => store.feedback);
  const feedbackList = useSelector(store => store.feedbackList);
  const dispatch = useDispatch();

  // this is to render the columns with MUI DataGrid
  // field values must match up with object key values
  const columns: GridColDef[] = [
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
    // delete code below is adapted from https://stackoverflow.com/a/64331367
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      sortable: false,
      renderCell: (params) => {
        const onDelete = (e) => {
          e.stopPropagation(); // don't select this row after clicking
          console.log(params.id);
          deleteRow(params.id);
        };

        return <Button onClick={onDelete}>Delete</Button>;

      },
    }
  ];

  // this deletes the row with given id 
  const deleteRow = (id) => {
    axios.delete(`/api/feedback/${id}`)
      .then(res => {
        console.log("delete feedback success", res);
        refreshList();
      })
      .catch(err => {
        console.error('deleted feedback fail', err);
      });
  }

  // GETs the feedback list from db
  const refreshList = () => {
    axios.get('/api/feedback')
      .then(res => {
        console.log(res.data);
        // stores the data into state
        dispatch({
          type: 'REFRESH_LIST',
          payload: res.data
        })
      })
      .catch(err => {
        console.error('refresh feedback fail', err);
      });
  }

  // trying to update the state of the data on the page
  // when feedback{} store object changes, but it dont work
  useEffect(refreshList, [feedback]);

  return (
    <>
      <div className="sub-heading">
        Feedback Results
      </div>
      {/* much of this code is adapted from DataGrid guide on MUI website */}
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
          rows={feedbackList}
          columns={columns}
          disableSelectionOnClick
        />


      </Box>
    </>
  )
}

export default Admin;
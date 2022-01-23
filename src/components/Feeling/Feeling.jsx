import './Feeling.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBar from '../StarBar/StarBar'

import { useState } from 'react';


function Feeling() {


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting feeling',value);
    // dispatch  type:'SUBMIT_FEELING' payload: feelingValue
  }


  return (
    <div id="feeling">
      <h1>
        How are you feeling today?
      </h1>
      <form id="feeling-form" onSubmit={handleSubmit}>
        <div id="feeling-box">
          <h3 id="feeling-question">Feeling?</h3>
          <StarBar />
          {/* <input type="number" id="feeling-input" /> */}
        </div>
        <div id="feeling-submit">


          <Link to="/understand">
            <input type="submit" value="NEXT"/>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Feeling
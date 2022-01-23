const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST feedback
router.post('/', (req, res) => {
  const feedback = req.body;
  const sqlText = `INSERT INTO feedback 
                  (feeling, understanding, support, comments)
                   VALUES ($1, $2, $3, $4)`;
  // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
  // the $1, $2, etc get substituted with the values from the array below
  pool.query(sqlText, [
    feedback.feeling,
    feedback.understand,
    feedback.support,
    feedback.comment
  ])
    .then((result) => {
      console.log(`Added feedback to the database`, feedback);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    })
});
// END POST Route

module.exports = router;
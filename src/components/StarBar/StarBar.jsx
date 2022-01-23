import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import { useState } from 'react';


function StarBar() {

  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const labels = {
    0: '0/5',
    1: '1/5',
    2: '2/5',
    3: '3/5',
    4: '4/5',
    5: '5/5',
  };

  return (
    <div className="rating">
      <Rating
        name="rating-bar"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box id="star-label">{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>

  )

}

export default StarBar;
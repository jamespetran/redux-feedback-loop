import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function StarBar({state, type_input}) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(state);
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
        value={state}
        onChange={(event, newValue) => {
          setValue(newValue);
          dispatch({
            type: type_input,
            payload: newValue,
          })
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box className="star-label" >{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>

  )

}

export default StarBar;
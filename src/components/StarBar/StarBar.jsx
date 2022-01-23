import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// star bar is a graphical and numeric text-based display for feedback, 1-5.
function StarBar({state, type_input}) {
  const dispatch = useDispatch();

  // value is the stored value, hover is the displayed value when hovering
  // state is a passed in value, based on feeling, understanding or support (can be reused as a result)
  const [value, setValue] = useState(state);
  const [hover, setHover] = useState(-1);

  // labels show up left side of StarBar based on value or hover
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
        // basic react-style state storage 
        onChange={(event, newValue) => {
          setValue(newValue);
          dispatch({
            // type_input is passed in to personalize the dispatch() for different pages where this component is used
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
    //much of the code in this component is adapted from the material UI site on the Rating component
  )

}

export default StarBar;
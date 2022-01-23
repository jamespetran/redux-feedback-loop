import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Grid from '@mui/material/Grid';
import StarBar from '../StarBar/StarBar';
import { useState } from 'react';

function Review() {
  const feeling = useSelector(store => store.feeling);
  const understand = useSelector(store => store.understand);
  const support = useSelector(store => store.support);
  const comment = useSelector(store => store.comment);
  const dispatch = useDispatch();
  const history = useHistory();
  const [commentInput, setCommentInput] = useState(comment);
  const [editComment, setEditComment] = useState(false);


  const submitComment = (event) => {
    console.log('submitting comment:', commentInput);
    dispatch({
      type: "SUBMIT_COMMENT",
      payload: commentInput,
    })
    setEditComment(false);
  }



  const clearInputs = () => {
    dispatch({
      type: 'SUBMIT_FEELING',
      payload: -1,
    })
    dispatch({
      type: 'SUBMIT_UNDERSTAND',
      payload: -1,
    })
    dispatch({
      type: 'SUBMIT_SUPPORT',
      payload: -1,
    })
    dispatch({
      type: 'SUBMIT_COMMENT',
      payload: "",
    })
  }

  const handleSubmit = () => {
    if (feeling > 0 && understand > 0 && support > 0) {
      const feedback = {
        feeling,
        understand,
        support,
        comment
      };
      console.log(feedback);
      dispatch({
        type: 'SUBMIT_FEEDBACK',
        payload: feedback
      });
      clearInputs();
      history.push('/');
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'One or more values has an invalid input. Go back to beginning of form?',
        icon: "error",
        confirmButtonText: 'yes',
        showCancelButton: 'no',
      })
        .then((result) => {
          if (result.isConfirmed) {
            console.log('confirmed')
            clearInputs();
            history.push('/');
          };
        });
    }
  }

  return (
    <div id="review">
      <h1>Review Your Feedback</h1>
      <h3>Feelings: {feeling}</h3>
      <div className="form">
        <div className="input-box">
          <StarBar
            state={feeling}
            type_input="SUBMIT_FEELING"
          />
        </div>
      </div>
      <h3>Understanding: {understand}</h3>
      <div className="form">
        <div className="input-box">
          <StarBar
            state={understand}
            type_input="SUBMIT_UNDERSTAND"
          />
        </div>
      </div>
      <h3>Support: {support}</h3>
      <div className="form">
        <div className="input-box">
          <StarBar
            state={support}
            type_input="SUBMIT_SUPPORT"
          />
        </div>
      </div>

      <h3>Comments: <span className="small">click the comment below to edit</span></h3>



      {editComment ?
        <div className="form">
          <textarea
            name="Text1"
            cols="30"
            rows="6"
            value={commentInput}
            onChange={evt => { setCommentInput(evt.target.value); }}
          />
          <button onClick={evt => submitComment()}>Set Comment</button>
        </div>
        : <div>
          {comment == "" ? <h5 onClick={evt => setEditComment(true)}>No comments submitted.</h5> : <h5 onClick={evt => setEditComment(true)}>{comment}</h5>}
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      }

    </div>
  )
}

export default Review;
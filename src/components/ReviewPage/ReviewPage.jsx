import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
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
  
  // editComment tracks if the comment section is in edit mode or not 
  const [editComment, setEditComment] = useState(false);

  // submits the comment to state if it is changed
  const submitComment = (event) => {
    console.log('submitting comment:', commentInput);
    dispatch({
      type: "SUBMIT_COMMENT",
      payload: commentInput,
    })
    setEditComment(false);
  }


  //clears the inputs / states when submitted
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

  // posts to database, with some very small data validation 
  const handleSubmit = () => {
    if (feeling > 0 && understand > 0 && support > 0) {
      const feedback = {
        feeling,
        understand,
        support,
        comment
      };
      console.log(feedback);
      axios.post('/api/feedback', feedback)
        .then(response => {
          console.log('success POST feedback', response);
          dispatch({
            type: 'SUBMIT_FEEDBACK',
            payload: feedback
          });
        })
        .catch(err => {
          console.error('error in POST feedback', err)
        })
      // clears state of 4 inputs
      clearInputs();
      // goes back to beginning of form
      history.push('/');
    } else {
      //sweet alert if something is wrong
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
          {/* fully reactive StarBar that allows a user to see what they picked and to change their mind if they want to - handles state inside */}
          <StarBar
            state={feeling}
            type_input="SUBMIT_FEELING"
          />
        </div>
      </div>
      <h3>Understanding: {understand}</h3>
      <div className="form">
        <div className="input-box">
          {/* fully reactive StarBar that allows a user to see what they picked and to change their mind if they want to - handles state inside */}
          <StarBar
            state={understand}
            type_input="SUBMIT_UNDERSTAND"
          />
        </div>
      </div>
      <h3>Support: {support}</h3>
      <div className="form">
        <div className="input-box">
          {/* fully reactive StarBar that allows a user to see what they picked and to change their mind if they want to - handles state inside */}
          <StarBar
            state={support}
            type_input="SUBMIT_SUPPORT"
          />
        </div>
      </div>

      <h3>Comments: <span className="small">click the comment below to edit</span></h3>


      {/* if editComment is in edit mode, then render a textarea element, with value of the current comment state */}
      {/* when Set comment is selected, set the commentInput value as Comment state */}
      {/* submit feedback button is not rendered when in edit mode */}

      {/* if editComment is not true, then comment may not be edited, but the overall feedback is able to be submitted */}
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
        {/* if comment state is nothing (because it is optional), then a small line of text is rendered: "No comments submitted." */}
        {/* and this extra bit allows the user to click on it to enter edit mode and add any comments that they want to */}
          {comment == "" ? <h5 onClick={evt => setEditComment(true)}>No comments submitted.</h5> : <h5 onClick={evt => setEditComment(true)}>{comment}</h5>}
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      }

    </div>
  )
}

export default Review;
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function Review() {
  const feeling = useSelector(store => store.feeling);
  const understand = useSelector(store => store.understand);
  const support = useSelector(store => store.support);
  const comment = useSelector(store => store.comment);
  const dispatch = useDispatch();


  const handleSubmit = () => {
    if( feeling > 0 && understand > 0 && support > 0){
      const feedback={
        feeling,
        understand,
        support,
        comment
      };
      console.log(feedback);
      axios.post('/api/feedback',feedback)
        .then(response => {
          console.log('success POST feedback', response);
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
          history.push('/thank-you');
        })
        .catch(err => {
          console.error('error in POST feedback',err)
        })
    }
  }

  return( 
    <div id="review">
      <h1>Review Your Feedback</h1>
      <h3>Feelings: {feeling}</h3>
      <h3>Understanding: {understand}</h3>
      <h3>Support: {support}</h3>
      <h3>Comments: {comment}</h3>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Review;
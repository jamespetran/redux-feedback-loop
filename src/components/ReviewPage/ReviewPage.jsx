import { useSelector } from 'react-redux';
import axios from 'axios';

function Review() {
  let feelingValue = useSelector(store => store.feeling);
  let understandValue = useSelector(store => store.understand);
  let supportValue = useSelector(store => store.support);
  const commentValue = useSelector(store => store.comment);

  const handleSubmit = () => {
    if( feelingValue > 0 && understandValue > 0 && supportValue > 0){
      axios.post('/')
    }
  }

  return( 
    <div id="review">
      <h1>Review Your Feedback</h1>
      <h3>Feelings: {feelingValue}</h3>
      <h3>Understanding: {understandValue}</h3>
      <h3>Support: {supportValue}</h3>
      <h3>Comments: {commentValue}</h3>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Review;
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StarBar from '../StarBar/StarBar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Feeling() {
  let feelingValue = useSelector(store => store.feeling);
  const history = useHistory();
  const nothing = '';

  // to submit the form and move on to the next page  
  const handleSubmit = (event) => {
    event.preventDefault();
    // if feelingValue is less than 0, then the user did not select a new value,
    // so the page will not move forward

    // this is deprecated with conditional rendering below
    if (feelingValue > 0) {
      console.log('submitting feeling', feelingValue);  
      history.push('/understand');
    } else {
      alert('You must enter how you are feeling today to proceed')
    }
  }


  return (
    <div id="feeling" className="page-content">
      <h1>
        How are you feeling today?
      </h1>
      <form className="form">
        <div className="input-box">
          <h3 className="question">Feeling?</h3>
          {/* star bar component has more explanation inside */}
          <StarBar
            state={feelingValue}
            type_input="SUBMIT_FEELING"
          />
          {/* <input type="number" id="feeling-input" /> */}
        </div>
        <div className="submit">

          <Link to="/understand">
          {/* conditional rendering to make NEXT button appear only after a selection is made */}
          {feelingValue > 0 ? <button value="NEXT" onClick={handleSubmit}> 
              NEXT</button> : nothing }

          </Link>
        </div>
      </form>
    </div>
  )
}

export default Feeling
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StarBar from '../StarBar/StarBar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Feeling() {
  let feelingValue = useSelector(store => store.feeling);
  const history = useHistory();


  const handleSubmit = (event) => {
    event.preventDefault();

    if (feelingValue > 0) {
      console.log('submitting feeling', feelingValue);
      history.push('/understand');
    } else {
      alert('You must enter how you are feeling today to proceed')
    }
    // dispatch  type:'SUBMIT_FEELING' payload: feelingValue
  }


  return (
    <div id="feeling" className="page-content">
      <h1>
        How are you feeling today?
      </h1>
      <form className="form">
        <div className="input-box">
          <h3 className="question">Feeling?</h3>
          <StarBar
            state={feelingValue}
            type_input="SUBMIT_FEELING"
          />
          {/* <input type="number" id="feeling-input" /> */}
        </div>
        <div className="submit">


          <Link to="/understand">
            <button value="NEXT" onClick={handleSubmit}>NEXT</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Feeling
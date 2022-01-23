import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StarBar from '../StarBar/StarBar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Support() {
  let supportValue = useSelector(store => store.support);
  const history = useHistory();
  const nothing = '';


  const handleSubmit = (event) => {
    event.preventDefault();

    if (supportValue > 0) {
      console.log('submitting support', supportValue);
      history.push('/comment');
    } else {
      alert('You must enter how supported you feel to proceed')
    }
  }

  return (
    <div id="support" className="page-content">
      <h1>
        How well are you being supported?
      </h1>
      <form className="form">
        <div className="submit">
          <Link to="/understand">
            <button value="PREV">PREV</button>
          </Link>
        </div>

        <div className="input-box">
          <h3 className="question">Support?</h3>
          {/* star bar component has more explanation inside */}
          <StarBar
            state={supportValue}
            type_input="SUBMIT_SUPPORT"
          />
        </div>
        <div className="submit">


          <Link to="/support">
            {/* conditional rendering to show next button only if support value is selected */}
            {supportValue > 0 ? <button value="NEXT" onClick={handleSubmit}>
              NEXT</button> : nothing}
          </Link>
        </div>
      </form>
    </div>)
}

export default Support
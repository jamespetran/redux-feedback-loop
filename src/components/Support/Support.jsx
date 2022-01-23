import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StarBar from '../StarBar/StarBar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Support() {
  let supportValue = useSelector(store => store.support);
  const history = useHistory();


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
        <div className="input-box">
          <h3 className="question">Support?</h3>
          <StarBar 
            state= {supportValue}
            type_input="SUBMIT_SUPPORT"
          />
        </div>
        <div className="submit">


          <Link to="/support">
            <input type="submit" value="NEXT" onClick={handleSubmit}/>
          </Link>
        </div>
      </form>
    </div>)
}

export default Support
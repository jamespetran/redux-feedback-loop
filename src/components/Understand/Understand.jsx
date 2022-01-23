import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StarBar from '../StarBar/StarBar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Understand() {
  let understandValue = useSelector(store => store.understand)
  const history = useHistory();


  const handleSubmit = (event) => {
    event.preventDefault();

    if (understandValue > 0) {
      console.log('submitting understanding', understandValue);
      history.push('/support');
    } else {
      alert('You must enter how well you are understanding the content to proceed')
    }
  }

  return (  
    <div id="understand" className="page-content">
      <h1>
        How well are you understanding the content?
      </h1>
      <form className="form">
        <div className="input-box">
          <h3 className="question">Understanding?</h3>
          <StarBar 
            state= {understandValue}
            type_input="SUBMIT_UNDERSTAND"
          />
        </div>
        <div className="submit">


          <Link to="/support">
            <input type="submit" value="NEXT" onClick={handleSubmit}/>
          </Link>
        </div>
      </form>
    </div>
    )
}

export default Understand
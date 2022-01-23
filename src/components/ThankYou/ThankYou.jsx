import { HashRouter as Router, Route, Link } from 'react-router-dom';

function ThankYou() {

  // this page is very basic, and includes mostly static text with a link back to the beginning
  return(
    <div id="thank-you">
      <h1>Submission success!</h1>
      <h2>Thank you!</h2>
      <h3>
        <Link to="/">
        <button>Leave New Feedback</button>
        </Link>
      </h3>
    </div>
  )
}

export default ThankYou;
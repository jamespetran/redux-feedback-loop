import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Support from '../Support/Support';
import Review from '../ReviewPage/ReviewPage';
import ThankYou from '../ThankYou/ThankYou';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>

      </header>

        <Router>
          <Route path="/" exact>
            <Feeling />
          </Route>
          <Route path="/understand" exact>
            <Understand />
          </Route>
          <Route path="/support" exact>
            <Support />
          </Route>
          <Route path="/comment" exact>
            <Comment />
          </Route>
          <Route path="/review" exact>
            <Review />
          </Route>
          <Route path="/thank-you" exact>
            <ThankYou />
          </Route>
        </Router>

        <ol>
          <li>
            Navigation:
          </li>
          <li>
            input validation
          </li>
          <li>
            POST to database
          </li>
        </ol>

    </div>
  );
}

export default App;

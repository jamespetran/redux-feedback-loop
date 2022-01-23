import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

// feeling reducer
const feeling = (state = -1, action) => {
  switch (action.type) {
    case 'SUBMIT_FEELING':
      return action.payload;
  }
  return state
}

const understand = (state = -1, action) => {
  switch (action.type) {
    case 'SUBMIT_UNDERSTAND':
      return action.payload;
  }
  return state
}

const support = (state = -1, action) => {
  switch (action.type) {
    case 'SUBMIT_SUPPORT':
      return action.payload;
  }
  return state
}

const comment = (state = "", action) => {
  switch (action.type) {
    case 'SUBMIT_COMMENT':
      return action.payload;
  }
  return state
}

const feedback = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_FEEDBACK':
      //axios call here
      axios.post('/api/feedback', action.payload)
        .then(response => {
          console.log('success POST feedback', response);
        })
        .catch(err => {
          console.error('error in POST feedback', err)
        })

      return [];
  }
  return state
}


const store = createStore(
  combineReducers({
    feeling,
    understand,
    support,
    comment,
    feedback
  }),
  applyMiddleware(logger)
)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

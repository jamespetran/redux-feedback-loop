import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// feeling reducer
const feeling = (state = -1, action) => {
  switch (action.type) {
    case 'SUBMIT_FEELING':
      return action.payload;
  }
  return state
}

// understand reducer
const understand = (state = -1, action) => {
  switch (action.type) {
    case 'SUBMIT_UNDERSTAND':
      return action.payload;
  }
  return state
}

// support reducer
const support = (state = -1, action) => {
  switch (action.type) {
    case 'SUBMIT_SUPPORT':
      return action.payload;
  }
  return state
}

// comment reducer
const comment = (state = "", action) => {
  switch (action.type) {
    case 'SUBMIT_COMMENT':
      return action.payload;
  }
  return state
}

// feedback reducer - for individual feedback pieces
const feedback = (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_FEEDBACK':
      return action.payload;
    case 'DELETE_FEEDBACK':
      return action.payload;
  }
  return state
}

// overall feedback list reducer, designed to hold all values of feedback
const feedbackList = (state = [], action) => {
  switch (action.type) {
    case 'REFRESH_LIST':
      return action.payload;
  }
  return state;
}

const store = createStore(
  combineReducers({
    feeling,
    understand,
    support,
    comment,
    feedback,
    feedbackList
  }),
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

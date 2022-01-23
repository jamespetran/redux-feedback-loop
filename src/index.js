import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

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


const store = createStore(
  combineReducers({
    feeling,
    understand,
    support,
    comment
  }),
  applyMiddleware(logger)
)



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

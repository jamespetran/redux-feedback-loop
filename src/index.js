import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const feelingReducer = (state = -1, action) => {
  switch(action.type) {
    case 'SUBMIT_FEELING':
      return action.payload;
  }
  return state
}

const store = createStore(
  combineReducers({
    feelingReducer,
  })
)
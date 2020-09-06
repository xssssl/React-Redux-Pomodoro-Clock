import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import clock from './reducers/clock'
// import './index.scss'
import App from './components/App'

const store = createStore(clock);

ReactDOM.render(  
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

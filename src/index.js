import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import rootReducer from './redux/reducers/_root.reducer'
import './index.css';
import App from './components/App/App.jsx';

const reduxStore = createStore(
  rootReducer,
);


ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, 
  document.getElementById('root'));

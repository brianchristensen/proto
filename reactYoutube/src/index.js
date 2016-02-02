import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './app';
import rootReducers from './reducers';

const initialState = {
  
};

const finalCreateStore = applyMiddleware( thunkMiddleware )( createStore )
const store = finalCreateStore( rootReducers, initialState );

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('.container')
);
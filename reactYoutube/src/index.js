import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './app';
import rootReducers from './reducers';

const initialState = {
	// not in use
};

const finalCreateStore = compose(
	applyMiddleware( thunkMiddleware ),

	typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)( createStore )

const store = finalCreateStore( rootReducers, initialState );

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.querySelector('.container-fluid')
);
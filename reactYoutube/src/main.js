import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import _ from 'lodash';

import App from './components/app';
import initRoutes from './routes';
import configStore from './configStore';
import configGlobal from './configGlobal';

// init the global config
configGlobal();

// create redux store and sync with react-router-redux
const initialState = window.__INITIAL_STATE__;
const store = configStore(initialState);
const history = syncHistoryWithStore( browserHistory, store, {
	selectLocationState: ( state ) => state.router
} );

// inject Redux store into routes
// provide the store to the route definitions so that routes have access to it for hooks such as `onEnter`
const routes = initRoutes( store );

// redux and react-router have been configured; render the app
ReactDOM.render(
	<App history={ history } routes={ routes } store={ store } />,
	document.getElementById( 'root' )
)
import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { routerActions } from 'react-router-redux'

import { App, 
		 Login, 
		 YouTube, 
		 BadRequest, 
		 Layout } from './components/app';

function requireAuth({ dispatch, getState }) {
    const state = getState();
    const isLoggedIn = Boolean( state.auth.isAuthorized );

    if ( !isLoggedIn )
    {
        dispatch( routerActions.push( '/login' ) );
    }
}

export default ( store ) => (
	<Route path='/' component={ Layout }>
		<Route onEnter={ requireAuth( store ) }>
			<Route path='/youtube' component={ YouTube } />
		</Route>
		<Route path='/login' component={ Login } />
		<Route path='/404' component={ BadRequest } />
		<Redirect from='*' to='/404' />
	</Route>
)

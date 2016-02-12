import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

// using the `resolve.root` configuration option in webpack
// which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// the current file is.
import Layout from './components/site/layout';
import BadRequest from './components/site/badRequest';
import { Login, YouTube } from './components/app';

export default ( store ) => (
	<Route path='/' component={ Layout }>
		<IndexRoute component={ YouTube } />
		<Route path='/login' component={ Login } />
		<Route path='/404' component={ BadRequest } />
		<Redirect from='*' to='/404' />
	</Route>
)

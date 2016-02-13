import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Link } from 'react-router';

export default class App extends React.Component
{
	static propTypes = {
		history: PropTypes.object.isRequired,
		routes: PropTypes.element.isRequired,
		store: PropTypes.object.isRequired
	};

	get content ()
	{
		return (
			<Router history={ this.props.history }>
				{ this.props.routes }
			</Router>
		)
	}

	render ()
	{
		return (
			<Provider store={ this.props.store }>
				{ this.content }
			</Provider>
		)
	}
}

// export all app sub-components from here for easy require from ./components/app
export Login from './login/login';
export YouTube from './youtube/youTubePlayer';
export Layout from './site/layout';
export BadRequest from './site/badRequest';
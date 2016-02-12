import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export Login from './login/login';
export YouTube from './youtube/youTubePlayer';

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
				<div style={{ height: '100%' }}>
					{ this.content }
				</div>
			</Provider>
		)
	}
}
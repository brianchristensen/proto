import React, { PropTypes, Component } from 'react';
import Auth from '../services/auth'

export class Login extends Component {

	constructor() {
		this.state = {
			user: '',
			pass: ''
		};
	}

	login(e) {
		e.preventDefault();

		Auth.login(this.state.user, this.state.password)
			.catch((err) => {
				console.log("Error logging in: " + err);
			});
	}

	render () {
		return {
			<form role="form">
				<div className="form-group">
					<input type="text" valueLink="{this.linkState('user')
				</div>
			</form>
		};
	}
};

export default Login;
import React, { PropTypes, Component } from 'react';

export class LoginForm extends Component {
	static propTypes = {
		'onLoginSubmit': PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);

		this.state = {
			user: '',
			pass: ''
		};

		this.onUserChange = this.onUserChange.bind(this);
		this.onPassChange = this.onPassChange.bind(this);
		this.login = this.login.bind(this);
	}

	onUserChange(event) {
    	this.setState({ user: event.target.value });
  	}

	onPassChange(event) {
    	this.setState({ pass: event.target.value });
  	}

	login(e) {
		e.preventDefault();

		this.setState({ user: '', pass: ''});
		this.props.onLoginSubmit( this.state.user, this.state.pass );
	}

	render () {
		return (
			<form role="form" onSubmit={this.login} className="input-group">
				<div className="form-group">
					<input type="text" style={{"marginBottom" : 10}}
						placeholder="Username" 
						className="form-control"
						value={this.state.user}
						onChange={this.onUserChange} />
					<input type="password" style={{"marginBottom" : 10}}
						placeholder="Password" 
						className="form-control"
						value={this.state.pass}
						onChange={this.onPassChange} />
				</div>
				<button type="submit" className="btn btn-primary" >Login</button>
			</form>
		);
	}
};

export default LoginForm;
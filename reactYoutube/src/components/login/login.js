import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'redux-router';

import LoginForm from './loginForm';
import * as authActions from '../../actions/auth'

export class Login extends Component {
	static propTypes = {
        'auth': PropTypes.object.isRequired, 
        'authActions': PropTypes.object.isRequired,
        'push': PropTypes.func.isRequired
    };

    loginRedirect() {
        // youtube is at / for now
        this.props.push( '/' );
    }

    render() {

        const title = "YouTube Video Player Login";

        const loginSubmit = (user, pass, redirect) => { this.props.authActions.login( user, pass, ::this.loginRedirect ); };

        // if the user has submitted auth info and is waiting for authentication
        if ( this.props.auth.isRequestingAuth )
        {
      		return (
	            <div>
	                <h1>{title}</h1>
	                <h2>Authenticating...</h2>
	            </div>
        	);
    	}

    	// if the user has failed authentication
    	if ( this.props.auth.authFailed )
    	{
    		return (
	            <div>
	                <h1>{title}</h1>
	                <h2>Authentication failed.</h2>
	                <div className="row">
	                    <div className="col-sm-7">
	                        <LoginForm onLoginSubmit={loginSubmit} />
	                    </div> 
	                </div>
	            </div>
        	);
    	}

    	// otherwise return the default login form
        return (
            <div>
                <h1>{title}</h1>
                <div className="row">
                    <div className="col-sm-7">
                        <LoginForm onLoginSubmit={loginSubmit} />
                    </div> 
                </div>
            </div>
        );
    }
}

export default connect(
	( state ) => ({
        'auth': state.auth
    }),
    ( dispatch ) => ({
        'authActions': bindActionCreators( authActions, dispatch ),
        'push': bindActionCreators( push, dispatch )
    })
) ( Login );
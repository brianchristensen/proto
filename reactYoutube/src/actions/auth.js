
export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';
export const REJECT_AUTH  = 'REJECT_AUTH';

export function login(user, pass, redirect) {
	return ( dispatch ) => {
		dispatch( {
			type: REQUEST_AUTH
		} );
		
		// should be making a call here to some external auth service
		let tempAuthInfo = {
			user: user,
			pass: pass
		}

		// there are 4 test states until we actually add the external auth service
		setTimeout( function()
		{
			if ( !user && !pass ) {
			dispatch( authFail( tempAuthInfo ) );
			}
			else if ( user && !pass ) {
				dispatch( authFail( tempAuthInfo ) );
			}
			else if ( !user && pass ) {
				dispatch( authFail( tempAuthInfo ) );
			}
			else {
				dispatch( authSuccess( tempAuthInfo ) );

				if (redirect)
				{
					redirect();
				}
			}
		}, 2000 );
	}
}

function authSuccess(authInfo) {
	return {
        type: RECEIVE_AUTH,       
        authInfo: authInfo
    };
}

function authFail(authInfo) {
	return {
        type: REJECT_AUTH,       
        authInfo: authInfo
    };
}


import { REQUEST_AUTH, RECEIVE_AUTH, REJECT_AUTH } from '../actions/auth';

const initialState = {
	isAuthorized: false,
    isRequestingAuth: false,
    authFailed: false,
    authInfo: {}
};

var authorization = (state = initialState, action = {}) => {
    switch (action.type) {
    	case REQUEST_AUTH:
            //preserve old state, overwrite only necessary props
    		return Object.assign( {}, state, {
    			isRequestingAuth: true
    		});
    		
        case RECEIVE_AUTH:
            //preserve old state, overwrite only necessary props
            return Object.assign( {}, state, { 
                authInfo: action.authInfo,
                isAuthorized: true,
                isRequestingAuth: false,
                authFailed: false
            });

        case REJECT_AUTH:
            //preserve old state, overwrite only necessary props
            return Object.assign( {}, state, { 
                authInfo: action.authInfo,
                isAuthorized: false,
                isRequestingAuth: false,
                authFailed: true
            });

        default:
            return state;
    }
};

export default authorization;
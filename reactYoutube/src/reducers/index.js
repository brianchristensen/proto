import { combineReducers } from 'redux';
import { routerReducer as Router } from 'react-router-redux'
import VideosReducer from './videos';
import AuthReducer from './auth'

const rootReducer = combineReducers({
	videos: VideosReducer,
	auth: AuthReducer,
	router: Router
});

export default rootReducer;
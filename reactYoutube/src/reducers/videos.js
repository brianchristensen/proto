import { REQUEST_VIDEOS, RECEIVE_VIDEOS } from '../actions/videos';

const initialState = {
	isFetching: false,
    items: []
};

var searchAndPlay = (state = initialState, action = {}) => {
    switch (action.type) {
    	case REQUEST_VIDEOS:
    		return {
                items: [],
    			isFetching: true
    		};
    		
        case RECEIVE_VIDEOS:
            return {
                items: action.items,
                isFetching: false
            };

        default:
            return state;
    }
};

export default searchAndPlay;
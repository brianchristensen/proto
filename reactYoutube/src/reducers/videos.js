import { REQUEST_VIDEOS, RECEIVE_VIDEOS, SELECT_VIDEO } from '../actions/videos';

const initialState = {
	isFetching: false,
    items: [],
    selectedVideo: null
};

var searchAndPlay = (state = initialState, action = {}) => {
    switch (action.type) {
    	case REQUEST_VIDEOS:
            //preserve old state, overwrite only necessary props
    		return Object.assign( {}, state, {
                //items: [],
    			isFetching: true
    		});
    		
        case RECEIVE_VIDEOS:
            //preserve old state, overwrite only necessary props
            return Object.assign( {}, state, { 
                items: action.items,
                isFetching: false
            });

        case SELECT_VIDEO:
            return Object.assign( {}, state, {
                selectedVideo: action.selectedVideo
            });

        default:
            return state;
    }
};

export default searchAndPlay;
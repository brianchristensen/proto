import { SELECT_VIDEO } from '../actions/selected_video';

const initialState = {
    selectedVideo: null
};

var playSelectedVideo = (state = initialState, action = {}) => {
	switch(action.type) {
		case SELECT_VIDEO:
			return {
				video: action.selectedVideo
			};

		default:
		 	return state;
	}
};

export default playSelectedVideo;

// // State argument is not application state, only the state
// // this reducer is responsible for
// export default function(state = initialState, action = {}) {
//   switch(action.type) {
// 	  case 'VIDEO_SELECTED':
// 	    return action.payload;
// 	  }

//   return state;
// }

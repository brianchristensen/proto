export const SELECT_VIDEO = 'SELECT_VIDEO';

export function selectVideo(video) {
	return ( dispatch ) => {
		dispatch({
			type: SELECT_VIDEO,
			selectedVideo: video
		});
	}
}

export const SELECT_VIDEO = 'SELECT_VIDEO';

export function selectVideo(videoId) {
	const url = `https://www.youtube.com/embed/${videoId}`;
 	return {
    	type: SELECT_VIDEO,
    	selectVideo: url
  	};
}

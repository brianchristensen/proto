import fetch from 'isomorphic-fetch';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function selectVideo(video) {
  return ( dispatch ) => {
    dispatch({
      type: SELECT_VIDEO,
      selectedVideo: video
    });
  }
}

export function fetchVideos(term) {
	return ( dispatch ) => {
		dispatch( {
			type: REQUEST_VIDEOS
		} );
		
		YTSearch({key: API_KEY, term: term}, (videos) => {
			dispatch( getVideos(videos) );
		});
	}
}

function getVideos(videos) {
	return {
        type: RECEIVE_VIDEOS,       
        items: videos
    };
}


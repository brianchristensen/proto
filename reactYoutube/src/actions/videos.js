import fetch from 'isomorphic-fetch';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

/*
export function receiveVideos(video, json) {
  return {
    type: RECEIVE_VIDEOS,
    videos: json.items.map((v) => { return {
        id: v.id.videoId,
        href: 'https://www.youtube.com/watch?v=' + v.id.videoId,
        src: v.snippet.thumbnails.default.url
      }; 
    })
  };
}
*/
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


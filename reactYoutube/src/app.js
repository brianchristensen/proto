import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search';
import VideoList from './components/list';
import VideoDetail from './components/detail';

import * as videosActions from './actions/videos';

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

export class App extends Component {
    static propTypes = {
        'videos': PropTypes.object.isRequired, 
        'videosActions': PropTypes.object.isRequired
    };

    render() {

        const title = "YouTube Video Player";

        const videoSearch = _.debounce((term) => { this.props.videosActions.fetchVideos(term); }, 300);
        const selectVideo = (selectedVideo) => { this.props.videosActions.selectVideo(selectedVideo); }

        return (
            <div>
                <h1>{title}</h1>
                <div className="row">
                    <div className="col-sm-5">
                        <SearchBar onSearchTermChange={videoSearch} />
                        <VideoList
                            onVideoSelect={selectVideo}
                            videos={this.props.videos} />
                    </div> 
                    <div className="col-sm-7">
                        <VideoDetail videos={this.props.videos} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    ( state ) => ({
        'videos': state.videos
    }),
    ( dispatch ) => ({
        'videosActions': bindActionCreators( videosActions, dispatch )
    })
)( App );
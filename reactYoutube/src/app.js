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
    'selectedVideo': PropTypes.object.isRequired,
    
    'videosActions': PropTypes.object.isRequired
  };

  render() {
    const videoSearch = _.debounce((term) => { this.props.videosActions.fetchVideos(term); }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.props.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.props.videos} />
      </div>
    );
  }
}

export default connect(
  ( state ) => ({
    'videos': state.videos,
    'selectedVideo': state.selectedVideo
  }),
  ( dispatch ) => ({
    'videosActions': bindActionCreators( videosActions, dispatch )
  })
)( App );
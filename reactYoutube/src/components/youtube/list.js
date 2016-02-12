import React, { PropTypes, Component } from 'react';
import VideoListItem from './listitem';

export class VideoList extends Component {
  static propTypes = {
    onVideoSelect: PropTypes.func.isRequired,
    videos: PropTypes.object.isRequired
  };
  
  render() {
    if ( !this.props.videos.items.length ) {
        return null;
    }
    
    const videoItems = this.props.videos.items.map((video) => {
      return (
        <VideoListItem
            onVideoSelect={this.props.onVideoSelect}
            key={video.etag}
            video={video} />
      );
    });

    return (
        <ul className="list-group">
            {videoItems}
        </ul>
    );
  }
};

export default VideoList;
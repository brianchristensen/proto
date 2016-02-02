import React, { PropTypes, Component } from 'react';

export class VideoDetail extends Component {
  static propTypes = {
    'video': PropTypes.object.isRequired
  };
  
  render() {
    if (!this.props.video.selectVideo) {
      return <div>No video selected</div>;
    }

    const videoId = this.props.video.selectVideo.id;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{this.props.video.selectVideo.snippet.title}</div>
          <div>{this.props.video.selectVideo.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
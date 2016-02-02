import React, { PropTypes, Component } from 'react';

export class VideoListItem extends Component {
  static propTypes = {
    onVideoSelect: PropTypes.func.isRequired,
    video: PropTypes.object.isRequired,
    key: PropTypes.string
  };

  render() {
    if ( !this.props.video ) {
      return null;
    }
    
    const imageUrl = this.props.video.snippet.thumbnails.default.url;

    return (
      <li onClick={() => this.props.onVideoSelect(this.props.video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
};

export default VideoListItem;
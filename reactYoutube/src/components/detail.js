import React, { PropTypes, Component } from 'react';

export class VideoDetail extends Component {
    static propTypes = {
        'selectedVideo': PropTypes.object.isRequired
    };
  
    render() {
        if (!this.props.selectedVideo.video) {
            return <div>No video selected</div>;
        }

        const videoId = this.props.selectedVideo.video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{this.props.selectedVideo.video.snippet.title}</div>
                    <div>{this.props.selectedVideo.video.snippet.description}</div>
                </div>
            </div>
        );
    }
};

export default VideoDetail;
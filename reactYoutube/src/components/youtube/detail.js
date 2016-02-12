import React, { PropTypes, Component } from 'react';

export class VideoDetail extends Component {
    static propTypes = {
        'videos': PropTypes.object.isRequired
    };
  
    render() {
        if (!this.props.videos.selectedVideo) {
            return <div>No video selected</div>;
        }

        const videoId = this.props.videos.selectedVideo.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{this.props.videos.selectedVideo.snippet.title}</div>
                    <div>{this.props.videos.selectedVideo.snippet.description}</div>
                </div>
            </div>
        );
    }
};

export default VideoDetail;
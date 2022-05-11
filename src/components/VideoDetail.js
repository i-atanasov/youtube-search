import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div className="ui loading">Loading...</div>;
    };

    const videoScr = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title='video player' src={videoScr} />
            </div>
            <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    ); 
}

export default VideoDetail;
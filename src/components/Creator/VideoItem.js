import React from "react";

function VideoItem({ video }) {
  const { thumbnail, title, creator, playListName, views } = video;
  return (
    <div className="video-item-wrapper">
      <div className="thumbnail">
        <div className="image">
          <img src={thumbnail} alt="thumbnail" />
        </div>
      </div>
      <div className="video-info">
        <div className="creator-profile">
          <div className="creator-image">
            <img src={creator?.icon} />
          </div>
        </div>
        <div className="video-details">
          <div className="video-title">{title}</div>
          <div className="creator-handler">{creator?.userHandler}</div>
          <div className="creator-playlist">{playListName}</div>
          <div className="views">views: {views}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default VideoItem;

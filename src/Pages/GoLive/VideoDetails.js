import React from "react";
import { useSelector } from "react-redux";
import "./VideoDetails.css";

function VideoDetails() {
  const user = useSelector((state) => state.user);
  const stream = useSelector((state) => state.stream);

  return (
    <div>
      <div className="video-details-wrapper">
        <div className="names-details">
          <div className="name-data">
            <div className="detail-item-title">Name</div>
            <div className="detail-item-data">
              {user.name ? user.name : "Name Here"}
            </div>
          </div>
          <div className="user-name">
            <div className="detail-item-title">Username</div>
            <div className="detail-item-data">
              {user.email ? user.email : "Email Here"}
            </div>
          </div>
        </div>
        <div className="detail-item underline">
          <div className="detail-item-title">RTMP URL</div>
          <div className="detail-item-data">rtmp://rtmp.livepeer.com/live</div>
        </div>
        <div className="detail-item ">
          <div className="detail-item-title">Streamer Key</div>
          <div className="detail-item-data">
            {stream.streamKey ? stream.streamKey : "Streamer Id Here"}
          </div>
        </div>
        <div className="detail-item underline">
          <div className="detail-item-title">Live URL</div>
          <div className="detail-item-data">rtmp://rtmp.livepeer.com/live</div>
        </div>
        <div className="detail-item">
          <div className="detail-item-title">Currently Connected</div>
          <div className="detail-item-data">ABC</div>
        </div>
        <div className="detail-item">
          <div className="detail-item-title">Thumbnail</div>
          <div
            className="detail-item-data"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input type="file" />
            <button className="action-button2">upload</button>
          </div>
        </div>
        <button className="stream-to-different">STREAM TO PLATFORMS</button>
        <div className="action-buttons-live">
          <button className="action-button-live color-green">START LIVE</button>
          <button className="action-button-live color-red">STOP LIVE</button>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;

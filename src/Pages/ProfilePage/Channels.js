import React from "react";
import { useSelector } from "react-redux";
import "./channels.css";

const channels = [
  {
    channelName: "Podcast",
    channelId: 1,
  },
  {
    channelName: "Gaming",
    channelId: 1,
  },
];

const Channel = ({ channel }) => {
  const { channelName, channelId } = channel;
  return <div className="channelItem">#{channelName}</div>;
};

function Channels() {
  const user = useSelector((state) => state.user);
  return (
    <div className="all-channels">
      <div className="user-channel">
        <div>{user.name}' channels</div>
      </div>
      {channels.map((channel) => (
        <Channel channel={channel} />
      ))}
    </div>
  );
}

export default Channels;

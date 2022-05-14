import React from "react";
import { useSelector } from "react-redux";
import "./FollowDetails.css";

function FollowDetails() {
  const user = useSelector((state) => state.user);

  return (
    <div className="followDetailsWrapper">
      <div className="userInfo">
        <div className="userName">{user.name}</div>
        <div className="userHandler">
          @{user.name.toLowerCase().replace(/\s/g, "")}
        </div>
      </div>
      <div className="actionButtons">
        <button className="actionButton">edit</button>
        <button className="actionButton">setting</button>
      </div>
      <div style={{ flexGrow: 1 }}></div>
      <div className="folloItems">
        <div className="followItem">{`${1} FOLLOWERS`}</div>
        <div className="followItem">{`${1} FOLLOWING`}</div>
        <div className="followItem">{`${1} SUPERFANS`}</div>
      </div>
    </div>
  );
}

export default FollowDetails;

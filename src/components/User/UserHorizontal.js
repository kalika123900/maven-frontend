import React from "react";
import "./User.css";

function UserHorizontal({ icon, userName, userHandler }) {
  return (
    <div className="user-horizontal-wrapper">
      <div className="userIcon">
        <div className="iconImage">
          <img src={icon} />
        </div>
      </div>
      <div className="userDetails">
        <div>{userName}</div>
        <div>{userHandler}</div>
      </div>
      <div className="actionButton">
        <button>Follow</button>
      </div>
    </div>
  );
}

export default UserHorizontal;

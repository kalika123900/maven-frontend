import React from "react";
import "./ProfileDetails.css";
import ProfileBackGround from "../../img/ProfileBackground.jpg";
import { useSelector } from "react-redux";

function ProfileDetails() {
  const user = useSelector((state) => state.user);

  return (
    <div className="profile-details-wrapper">
      <div className="profile-mage-background">
        <div className="backGround">
          <img src={ProfileBackGround} width="100%" />
        </div>
        <div className="profileImage">
          <div className="Icon">
            <img src={user.profileImage} />
          </div>
        </div>
        <div className="editButton">edit</div>
      </div>
    </div>
  );
}

export default ProfileDetails;

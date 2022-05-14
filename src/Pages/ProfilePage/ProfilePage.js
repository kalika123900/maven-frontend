import React from "react";
import Channels from "./Channels";
import ContentTabs from "./ContentTabs";
import FollowDetails from "./FollowDetails";
import ProfileDetails from "./ProfileDetails";

function ProfilePage() {
  return (
    <div className="main_container" style={{ minHeight: "100vh" }}>
      <aside style={{ backgroundColor: "rgb(22, 24, 28)" }}>
        <div className="">
          <Channels />
        </div>
      </aside>
      <main className="main_con">
        <ProfileDetails />
        <FollowDetails />
        <ContentTabs />
      </main>
    </div>
  );
}

export default ProfilePage;

import React, { useState } from "react";
import "./ContentTab.css";

const VIDEOS = "VIDEOS";
const PODCASTS = "PODCASTS";

function ContentTabs() {
  const [currentTab, setCurrentTab] = useState(VIDEOS);

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="content-tab-wrapper">
      <div className="tab-titles">
        <div
          className={`tab ${currentTab === VIDEOS ? "active-tab" : ""}`}
          onClick={() => changeTab(VIDEOS)}
        >
          Videos
        </div>
        <div
          className={`tab ${currentTab === PODCASTS ? "active-tab" : ""}`}
          onClick={() => changeTab(PODCASTS)}
        >
          Podcasts
        </div>
      </div>
      {currentTab === VIDEOS && <div className="videoContents">Videos</div>}
      {currentTab === PODCASTS && <div className="videoContents">PODCASTS</div>}
    </div>
  );
}

export default ContentTabs;

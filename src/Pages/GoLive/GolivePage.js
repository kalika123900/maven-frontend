import React from "react";
import Stream from "../../components/Stream";
import Slider from "../../img/slider.jpg";
import VideoDetails from "./VideoDetails";

import "./Golive.css";

function GolivePage() {
  return (
    <div className="">
      {/* <aside style={{ backgroundColor: "rgb(22, 24, 28)" }}></aside> */}
      <div className="golive-wrapper">
        <Stream />
        {/* <div>streamer</div> */}
        <VideoDetails />
      </div>
    </div>
  );
}

export default GolivePage;

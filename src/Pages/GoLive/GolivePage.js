import React from "react";
import Popup from "../../components/Popup/Popup";
import Stream from "../../components/Stream";
import Slider from "../../img/slider.jpg";
function GolivePage() {
  return (
    <div className="main_container" style={{ minHeight: "100vh" }}>
      <aside style={{ backgroundColor: "rgb(22, 24, 28)" }}></aside>
      <main className="main_con">
        <div className="">
          <Popup />
          <Stream />
          <img src={Slider} alt="" />
        </div>
      </main>
    </div>
  );
}

export default GolivePage;

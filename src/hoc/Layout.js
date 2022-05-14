import React, { useState } from "react";
import Header from "../components/Header/Header";
import Popup from "../components/Popup/Popup";
import "../components/Popup/Popup.css";
import Recommended_users from "../components/Recommended_users/Recommended_users";
import Slider from "../img/slider.jpg";
import Play from "../img/Play.png";

import Stream from "../components/Stream";
import RecommendedVideos from "../components/Creator/RecommendedVideos";

// import Login from '../Login';

function Layout(props) {
  const [test, setTest] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const LoginHandler = (fun) => {
    setTest(fun);
  };

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="page-wrapper">
      <Header
        logoutHandler={props.logoutHandler}
        publicAddress={props.publicAddress}
        LoginHandler={props.clickHandler}
        toggleMenu={handleToggleMenu}
      />

      <div
        className={`sidePanel ${openMenu ? "sidePanelOpen" : "sidePanelClose"}`}
      >
        sidePanel
      </div>

      {/* <Login LoginHandler={LoginHandler} /> */}

      <div className="main_container">
        <aside style={{ backgroundColor: "rgb(22, 24, 28)" }}>
          <Recommended_users />
        </aside>

        <main className="main_con">
          {/* <Popup/> */}
          {/* <Stream /> */}
          {/* <img src={Slider} alt="" /> */}
          <div style={{ textAlign: "left" }}>
            <h2>Live channels we think you’ll like</h2>
          </div>
          <RecommendedVideos />

          {/* <div className="liveChannelFlex">
            <div className="liveChannelBox">
              <div className="videoBox">
                <img src={Play} alt="" />
              </div>
              <div class="recommended_users_list">
                <div>
                  <div class="recommended_profiles">
                    <div class="circle"></div>
                    <div class="recommended_profiles_titel">
                      <h6>Recommended Profiles</h6>
                      <p>Recommended Channels</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="views">
                    <span class="red_cricle"></span>8.3k
                  </div>
                </div>
              </div>
            </div>
            <div className="liveChannelBox">
              <div className="videoBox">
                <img src={Play} alt="" />
              </div>
              <div class="recommended_users_list">
                <div>
                  <div class="recommended_profiles">
                    <div class="circle"></div>
                    <div class="recommended_profiles_titel">
                      <h6>Recommended Profiles</h6>
                      <p>Recommended Channels</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="views">
                    <span class="red_cricle"></span>8.3k
                  </div>
                </div>
              </div>
            </div>
            <div className="liveChannelBox">
              <div className="videoBox">
                <img src={Play} alt="" />
              </div>
              <div class="recommended_users_list">
                <div>
                  <div class="recommended_profiles">
                    <div class="circle"></div>
                    <div class="recommended_profiles_titel">
                      <h6>Recommended Profiles</h6>
                      <p>Recommended Channels</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="views">
                    <span class="red_cricle"></span>8.3k
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {props.children}
        </main>
      </div>
    </div>
  );
}

export default Layout;

import React, { useState } from "react";
import Header from "../components/Header/Header";
import Popup from "../components/Popup/Popup";
import "../components/Popup/Popup.css";
import Recommended_users from "../components/Recommended_users/Recommended_users";

import Stream from "../components/Stream";

// import Login from '../Login';

function Layout(props) {
  const [test, setTest] = useState(null);

  const LoginHandler = (fun) => {
    setTest(fun);
  };
  return (
    <>
      <Header
        logoutHandler={props.logoutHandler}
        publicAddress={props.publicAddress}
        LoginHandler={props.clickHandler}
      />

      {/* <Login LoginHandler={LoginHandler} /> */}

      <div className="main_container">
        <aside>
          <Recommended_users />
        </aside>

        <main className="main_con">
          {/* <Popup/> */}
          <Stream />
          <img src={require("../img/slider.jpg")} alt="" />
          <h2>Live channels we think you’ll like</h2>
          <div className="liveChannelFlex">
            <div className="liveChannelBox">
              <div className="videoBox">
                <img src={require("../img/Play.png")} alt="" />
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
                <img src={require("../img/Play.png")} alt="" />
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
                <img src={require("../img/Play.png")} alt="" />
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
                <img src={require("../img/Play.png")} alt="" />
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
                <img src={require("../img/Play.png")} alt="" />
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
          </div>

          <div className="liveChannelFlex">
            <div className="liveChannelBox">
              <div className="videoBox">
                <img src={require("../img/Play.png")} alt="" />
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
                <img src={require("../img/Play.png")} alt="" />
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
                <img src={require("../img/Play.png")} alt="" />
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
                <img src={require("../img/Play.png")} alt="" />
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
                <img src={require("../img/Play.png")} alt="" />
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
          </div>
          {props.children}
        </main>
      </div>
    </>
  );
}

export default Layout;

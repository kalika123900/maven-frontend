import React, { useState } from "react";
import Header from "../components/Header/Header";
import Recommended_users from "../components/Recommended_users/Recommended_users";
import Slider from "../img/slider.jpg";
import Play from "../img/Play.png";

import Stream from "../components/Stream";
import RecommendedVideos from "../components/Creator/RecommendedVideos";
import { useSelector } from "react-redux";
import { DEFAULT_PAGE, GOLIVE, PROFILE_PAGE } from "../routes";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import GolivePage from "../Pages/GoLive/GolivePage";

// import Login from '../Login';

function Layout(props) {
  const page = useSelector((state) => state.page);
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
      {page.name === DEFAULT_PAGE && (
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
            {props.children}
          </main>
        </div>
      )}

      {page.name === PROFILE_PAGE && <ProfilePage />}
      {page.name === GOLIVE && <GolivePage />}
    </div>
  );
}

export default Layout;

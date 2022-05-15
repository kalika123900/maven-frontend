import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
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
  const { page, user } = useSelector((state) => state);
  const navigate = useNavigate();
  const [test, setTest] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const LoginHandler = (fun) => {
    setTest(fun);
  };

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const Home = () => {
    return (
      <>
        <Header
          logoutHandler={props.logoutHandler}
          publicAddress={props.publicAddress}
          LoginHandler={props.clickHandler}
          toggleMenu={handleToggleMenu}
        />
        <div
          className={`sidePanel ${
            openMenu ? "sidePanelOpen" : "sidePanelClose"
          }`}
        >
          sidePanel
        </div>
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
      </>
    );
  };

  const ProfilePageBundle = () => {
    if (!user.email) {
      navigate("/");
    }
    return (
      <>
        <Header
          logoutHandler={props.logoutHandler}
          publicAddress={props.publicAddress}
          LoginHandler={props.clickHandler}
          toggleMenu={handleToggleMenu}
        />
        <div
          className={`sidePanel ${
            openMenu ? "sidePanelOpen" : "sidePanelClose"
          }`}
        >
          sidePanel
        </div>
        <ProfilePage />
      </>
    );
  };

  const GoLiveBundle = () => {
    if (!user.email) {
      navigate("/");
    }
    return (
      <>
        <Header
          logoutHandler={props.logoutHandler}
          publicAddress={props.publicAddress}
          LoginHandler={props.clickHandler}
          toggleMenu={handleToggleMenu}
        />
        <div
          className={`sidePanel ${
            openMenu ? "sidePanelOpen" : "sidePanelClose"
          }`}
        >
          sidePanel
        </div>
        <GolivePage />
      </>
    );
  };

  return (
    <div className="page-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:hexa" element={<ProfilePageBundle />} />
        <Route path="/live/:hexa" element={<GoLiveBundle />} />
      </Routes>
    </div>
  );
}

export default Layout;

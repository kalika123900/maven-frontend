import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Diamond from "../../img/Magnifying-glass.png";
import Menu from "../../img/menu.svg";
import ProfileSvg from "../../img/profile.svg";
import { changePageToStore } from "../../redux/page/action";
import { GOLIVE, PROFILE_PAGE } from "../../routes";

export default function Header(props) {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);
  const user = useSelector((state) => state.user);

  const { toggleMenu } = props;

  const goToProfilePage = () => {
    dispatch(changePageToStore(PROFILE_PAGE));
  };

  const goToGoLivePage = () => {
    dispatch(changePageToStore(GOLIVE));
  };

  return (
    <>
      <header>
        <div className="header">
          <div className="header-menu-icon">
            <img onClick={() => toggleMenu()} src={Menu} alt="menu" />
          </div>
          <div className="logo">
            <h1>De-stream</h1>
          </div>
          <div className="search">
            <input
              type="text"
              class=""
              id="Search"
              aria-describedby="Search"
              placeholder="Search"
            />
            <img src={Diamond} />
          </div>

          <div className="connect_wallet">
            {wallet.publicAddress ? (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    marginRight: "10px",
                  }}
                >
                  <button
                    style={{ padding: "1px 3px" }}
                    onClick={() => goToGoLivePage()}
                  >
                    GO LIVE
                  </button>
                </div>
                <div
                  className="header-profile-icon"
                  onClick={() => goToProfilePage()}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      flexDirection: "column",
                    }}
                  >
                    <div>{user.name}</div>
                    <div style={{ fontSize: "9px" }}>{user.email}</div>
                  </div>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                    src={user.profileImage}
                    alt="profile"
                  />
                </div>
              </>
            ) : (
              // <button onClick={props.logoutHandler}>Logout</button>
              <button
                onClick={props.LoginHandler}
                disabled={!wallet.torusReady}
                className={`${!wallet.torusReady && "buttton-disabled"}`}
              >
                CONNECT WALLET
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

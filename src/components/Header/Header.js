import React from "react";
import Diamond from "../../img/Magnifying-glass.png";
import Menu from "../../img/menu.svg";

export default function Header(props) {
  const { toggleMenu } = props;
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
            {props.publicAddress ? (
              <button onClick={props.logoutHandler}>Logout</button>
            ) : (
              <button onClick={props.LoginHandler}>CONNECT WALLET</button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

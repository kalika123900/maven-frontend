import React from "react";
import UserHorizontal from "../User/UserHorizontal";
import SolIcon from "../../img/solIcon.jpeg";
import Sachin from "../../img/Sachin.jpeg";
import Rajiv from "../../img/Rajiv.jpeg";
import Tanmay from "../../img/Tanmay.jpeg";

const users = [
  {
    icon: Tanmay,
    userName: "Tanmay Bhat",
    userHandler: "@your_tanmay",
  },
  {
    icon: Rajiv,
    userName: "Rajiv Ranjan",
    userHandler: "@coolmonk",
  },
  {
    icon: Sachin,
    userName: "Sachin Rana",
    userHandler: "@mavensach",
  },
  {
    icon: SolIcon,
    userName: "Kalika Prasad",
    userHandler: "@kalika_maven",
  },
];

export default function Recommended_users() {
  return (
    <div className="recommendedSection">
      <div className="recommendedWrapper">
        <div className="recommendedTitle">Recommended</div>
        {users.map((user) => (
          <UserHorizontal
            icon={user.icon}
            userName={user.userName}
            userHandler={user.userHandler}
          />
        ))}
      </div>
    </div>
  );
}

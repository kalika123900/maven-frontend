import React from "react";
import thumbnail1 from "../../img/thumbnail1.jpeg";
import thumbnail2 from "../../img/thumbnail2.jpeg";
import thumbnail3 from "../../img/thumbnail3.jpeg";
import thumbnail6 from "../../img/thumbnail4.jpeg";
import thumbnail4 from "../../img/thumbnail4.webp";

import thumbnail5 from "../../img/thumbnail5.webp";
import SolIcon from "../../img/solIcon.jpeg";
import Sachin from "../../img/Sachin.jpeg";
import Rajiv from "../../img/Rajiv.jpeg";
import Tanmay from "../../img/Tanmay.jpeg";
import VideoItem from "./VideoItem";
import "./video.css";

const recommendedVideos = [
  {
    thumbnail: thumbnail4,
    title: "Creating Something Big!!!",
    creator: {
      icon: Tanmay,
      userName: "Tanmay Bhat",
      userHandler: "@your_tanmay",
    },
    playListName: "Tagda",
    views: "100M",
  },
  {
    thumbnail: thumbnail2,
    title: "||| Hurray We are coming",
    creator: {
      icon: Sachin,
      userName: "Sachin Rana",
      userHandler: "@mavensach",
    },
    playListName: "Random",
    views: "230k",
  },
  {
    thumbnail: thumbnail3,
    title: "||| Hurray We are coming",
    creator: {
      icon: Rajiv,
      userName: "Rajiv Ranjan",
      userHandler: "@coolmonk",
    },
    playListName: "Random",
    views: "230k",
  },
  {
    thumbnail: thumbnail1,
    title: "Hey Lets just hangout for the solana hackathon || discuss events",
    creator: {
      icon: Rajiv,
      userName: "Rajiv Ranjan",
      userHandler: "@coolmonk",
    },
    playListName: "Random",
    views: "230k",
  },
  {
    thumbnail: thumbnail2,
    title: "||| Hurray We are coming",
    creator: {
      icon: Rajiv,
      userName: "Rajiv Ranjan",
      userHandler: "@coolmonk",
    },
    playListName: "Random",
    views: "230k",
  },
  {
    thumbnail: thumbnail5,
    title: "||| Hurray We are coming",
    creator: {
      icon: Rajiv,
      userName: "Mr Beast",
      userHandler: "@mrbeast",
    },
    playListName: "Playground",
    views: "100M",
  },
];

function RecommendedVideos() {
  return (
    <div className="recommended-videos-wrapper">
      {recommendedVideos.map((video) => (
        <VideoItem video={video} />
      ))}
    </div>
  );
}

export default RecommendedVideos;

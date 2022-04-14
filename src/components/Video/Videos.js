import React from "react";
import "./style.css";
import img3 from "../../images/img3.jpg";
import img2 from "../../images/img2.jpg";
import img4 from "../../images/img4.jpg";
import img1 from "../../images/img1.jpg";
import { FaPlayCircle } from "react-icons/fa";
import vid1 from "../../videos/vid1.mp4";

const Videos = () => {
  return (
    <>
      <div className="container5">
        <h1 style={{ fontWeight: "bold", color: "black" }}>
          Explore before you visit
        </h1>
        <div className="video-player">
          <video width="100%" controls autoPlay className="vid">
            <source src={vid1} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Videos;

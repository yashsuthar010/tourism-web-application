import React from "react";
import "./style.css";
import tour from "../../images/tour.png";

// import Slider from "react-slick";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="container1">
        <div className="mid">
          <h1 id="text">
            Explore the Beauty
            <br />
            Of world...
          </h1>
          <br />
          <h3 style={{ color: "#FFF8F3", fontSize: "1em" }}>
            "Life is either a daring adventure or nothing at all."
          </h3>
          <br />
          <br />

          <button className="btn1">Explore</button>
        </div>
        <div className="image">
          <img src={tour} className="img" />
        </div>

        <div className="tilt"></div>
        <div className="arrow-container">
          <div className="left">
            <AiOutlineArrowLeft style={{ color: "#ffafaf" }} />
          </div>
          <div className="right">
            <AiOutlineArrowRight style={{ color: "#ffafaf" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

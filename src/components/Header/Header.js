import React from "react";
import "./style.css";
import tour from "../../images/tour.png";
import one from "../../images/1x/one.png";
// import Slider from "react-slick";

const Header = () => {
  return (
    <>
      <div className="container1">
        <div className="mid">
          <h1 id="text">
            Travel the
            <br />
            <span id="head-text">world...</span>
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
            <img src={one} className="arrow-rotate" />
          </div>
          <div className="right">
            <img src={one} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import "./style.css";
import tour from "../../images/tour.png";
import sign from "../../images/sign.png";

const Header = () => {
  return (
    <>
      <div className="container1">
        <div className="mid">
          <h1 id="text">
            Share your
            <br />
            <span id="head-text">memories...</span>
          </h1>
          <br />
          <h3 style={{ color: "#FFF8F3", fontSize: "1em" }}>
            "Life is either a daring adventure or nothing at all."
          </h3>
          <br />
          <br />
          <br />

          <button className="btn1">Explore</button>
        </div>
        <div className="image">
          <img src={tour} className="img" />
        </div>
        <div className="tilt"></div>
      </div>
    </>
  );
};

export default Header;

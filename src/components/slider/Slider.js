import React from "react";
import {
  FaFire,
  FaHandHoldingHeart,
  FaSun,
  FaGrinHearts,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { GiGlassCelebration, GiNightSky } from "react-icons/gi";
import "./style.css";

const Slider = () => {
  return (
    <>
      <div className="cat-container">
        <ul className="cat-links">
          <li className="fire">
            <FaHandHoldingHeart
              className="icons"
              style={{ marginLeft: "20px" }}
            />
            <br />
            For you
          </li>
          <li className="fire">
            <FaFire
              className="icons"
              style={{ color: "red", marginLeft: "10px" }}
            />
            <br />
            Top
          </li>
          <li className="fire">
            <FaSun
              className="icons"
              style={{ color: "yellow", marginLeft: "10px" }}
            />
            <br />
            Day
          </li>
          <li className="fire">
            <GiNightSky
              className="icons"
              style={{ color: "whitesmoke", marginLeft: "10px" }}
            />
            <br />
            Night
          </li>
          <li className="fire">
            <FaGrinHearts
              className="icons"
              style={{ color: "pink", marginLeft: "10px" }}
            />
            <br />
            Romantic
          </li>
          <li className="fire">
            <FaUmbrellaBeach
              className="icons"
              style={{ color: "cream", marginLeft: "10px" }}
            />
            <br />
            Beach
          </li>
          <li className="fire">
            <GiGlassCelebration
              className="icons"
              style={{ color: "red", marginLeft: "10px" }}
            />
            <br />
            Celebration
          </li>
          {/* <li></li> */}
        </ul>
      </div>
    </>
  );
};

export default Slider;

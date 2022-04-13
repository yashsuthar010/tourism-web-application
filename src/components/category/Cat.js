import React from "react";
import "./style.css";
import robot from "../../images/robot.png";
import { FaFire, FaHandHoldingHeart } from "react-icons/fa";

const Cat = () => {
  return (
    <>
      <div className="container3">
        <h1 className="head">Category</h1>

        <div className="cat-container">
          <ul className="cat-links">
            <li className="hand">
              <FaHandHoldingHeart style={{ marginLeft: "20px" }} />
              <br />
              For you
            </li>
            <li className="fire">
              <FaFire style={{ color: "red", marginLeft: "10px" }} />
              <br />
              Top
            </li>
            {/* <li></li> */}
          </ul>
        </div>
        <div className="card-contain">
          <div className="card-1">
            <img src={robot} className="img-r" />
          </div>
          <div className="card-1">
            <img src={robot} className="img-r" />
          </div>
          <div className="card-1">
            <img src={robot} className="img-r" />
          </div>
          <div className="card-1">
            <img src={robot} className="img-r" />
          </div>
          <div className="card-1">
            <img src={robot} className="img-r" />
          </div>
          <div className="card-1">
            <img src={robot} className="img-r" />
          </div>
        </div>
        {/* <button>More</button> */}
      </div>
    </>
  );
};

export default Cat;

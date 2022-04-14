import React from "react";
import "./style.css";
import robot from "../../images/robot.png";
import Slider from "../slider/Slider";

const Cat = () => {
  return (
    <>
      <div className="container3">
        <h1 className="head">Moody places..</h1>
        {/* slider render */}
        <div>
          <Slider />
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

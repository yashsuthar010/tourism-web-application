import React from "react";
import "./style.css";
import game from "../../images/game.jpg";

const Hero = () => {
  return (
    <>
      <div className="container2">
        <h1>hero section</h1>
        <hr
          style={{
            height: "1px",
            borderWidth: 0,
            color: "gray",
            backgroundColor: "gray",
          }}
        />
        <div className="card-container">
          <div className="card">
            <img src={game} />

            <h3>hello</h3>

            <button className=" btn2">more</button>
          </div>
          <div className="card">
            <img src={game} />
            <h3>hello </h3>
            <button className="btn2">more</button>
          </div>
          <div className="card">
            <img src={game} />
            <h3>hello </h3>
            <button className="btn2">more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div>
          <a>
            <h1>
              <span id="logo">JUST</span>FUN
            </h1>
          </a>
        </div>
        <div className="link-container">
          <ul className="links">
            <li className="home">Home</li>
            <li className="about">About</li>
            <li className="service">Service</li>
          </ul>
        </div>
        <div className="btn-contain">
          <button className="btn">logIn</button>
          <button className="btn">SignIn</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

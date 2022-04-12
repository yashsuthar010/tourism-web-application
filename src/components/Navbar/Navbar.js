import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div>
          <a>
            <h1 style={{ fontFamily: "Beau Rivage" }}>
              <span id="logo">JUST</span>FUN
            </h1>
          </a>
        </div>
        <div className="link-container">
          <ul className="links">
            <li className="home">Home</li>
            <li className="explore">explore</li>

            <li className="gallery">Gallery</li>
            <li className="plan">Plan</li>
            <li className="expense">Expense</li>
          </ul>
        </div>
        <div className="btn-contain">
          <button className="btn1-1">logIn</button>
          <button className="btn3">SignIn</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

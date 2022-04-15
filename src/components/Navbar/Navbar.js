import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // var header = document.getElementsByClassName("links");
  // var btns = header.getElementsByClassName("li");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function () {
  //     var current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }
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
            <NavLink
              exact
              to="/"
              activeClassName="active"
              style={{ textDecoration: "none" }}
            >
              <li className="li">Home</li>
            </NavLink>

            <li className="li">Explore</li>

            <li className="li">Gallery</li>
            <li className="li">Plan</li>

            <li className="li">
              <NavLink
                exact
                to="/expense"
                activeClassName="active"
                style={{ textDecoration: "none" }}
              >
                Expense
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="btn-contain">
          <NavLink to="/signin">
            <button className="btn1-1">SignIn</button>
          </NavLink>

          <NavLink to="/signup">
            <button className="btn3">SignUp</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;

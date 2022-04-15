import React from "react";
import "./style.css";
import img9 from "../../images/img9.jpg";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <>
      <div className="container7">
        <div className="left1">
          <img src={img9} alt="" />
        </div>
        <div className="right1">
          <form action="main-servlet" method="post">
            <div className="text1">
              <h1 style={{ fontSize: "2.5em", fontWeight: "400" }} className="welcome">Welcome</h1>
            </div>
            <div className="main-content">
              <label className="labels">Name</label>
              <br />
              <label>
                <input type="text" placeholder="Name" name="name" required />
              </label>

              <br />
              <label className="labels">Password</label>
              <br />
              <label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
              </label>
              <br />

              <div className="btn-sign">
                <button type="submit" className="signupbtn button5">
                  Sign In
                </button>
                <h4 className="h4">
                  Create account? {/* <br /> */}
                  <Link to="/signup" className="signin-link">
                    Sign Up
                  </Link>
                </h4>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;

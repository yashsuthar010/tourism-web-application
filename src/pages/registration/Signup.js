import React from "react";
import "./style.css";
import img9 from "../../images/img9.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="container7">
        <div className="left1">
          <img src={img9} alt="" />
        </div>

        <div className="right1">
          <form action="main-servlet" method="post">
            <div className="text1-h1 text1">
              <h1
                style={{ fontSize: "2.5em", fontWeight: "400" }}
                className="get"
              >
                Get Stared
              </h1>
              <h4 style={{ marginTop: "15px" }}>
                Already have account?{" "}
                <Link to="/signin" className="signin-link">
                  Sign In
                </Link>
              </h4>
            </div>
            <div className="main-content">
              <label className="labels">Name</label>
              <br />
              <label>
                <input type="text" placeholder="Name" name="name" required />
              </label>
              <br />
              <label className="labels">Email</label>
              <br />
              <label>
                <input type="text" placeholder="Email" name="email" required />
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
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

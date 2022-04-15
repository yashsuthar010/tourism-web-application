import React from "react";
import "./style.css"
const Signup = () => {
  return (
    <>
  <div className="container">
    <div className="left">
      <img src="img1.jpg" alt=""/>
    </div>
    <div className="right">
      <form action="main-servlet" method="post">
        <div className="text">
          <h1>Get Stared</h1>
          <p>Already have and account? <a href="">Sign In</a></p>
        </div>
        <div className="main-content">
          <label>Name</label><br/>
          <label>
            <input type="text" placeholder="Name" name="name" required/>
          </label>
          <br>
          <label>Email</label><br>
          <label>
            <input type="text" placeholder="Email" name="email" required/>
          </label>
          <br>
          <label>Password</label><br>
          <label>
            <input type="password" placeholder="Enter Password" name="password" required/>
          </label><br>
          <button type="submit" className="signupbtn">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
    </>
  );
};

export default Signup;

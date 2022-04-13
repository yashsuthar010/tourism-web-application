// import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";

import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="half-color">
        <div className="container4">
          <h1 className="h">Trending...</h1>
          <div className="slider-container">
            <Slider {...settings} className="slides">
              <div className="slide1">
                <img src={img1} className="slide-img1" />
              </div>
              <div className="slide1">
                <img src={img2} className="slide-img1" />
              </div>
              <div className="slide1">
                <img src={img3} className="slide-img1" />
              </div>
              <div className="slide1">
                <img src={img4} className="slide-img1" />
              </div>
              <div className="slide1">
                <img src={img5} className="slide-img1" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

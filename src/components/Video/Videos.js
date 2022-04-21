import React from "react";
import "./style.css";

const Videos = () => {
  return (
    <>
      <div className="container5">
        <h1 style={{ fontWeight: "bold", color: "black" }}>
          Explore before you visit
        </h1>
        <div className="video-player">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tQ0yjYUFKAE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style={{ height: "100%", width: "100%", borderRadius: "30px" }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Videos;

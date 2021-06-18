import React from "react";
import bimg from "../images/background.png";
import "./Background.css";
function Background() {
  return (
    <div className="background-container">
      <img className="Image" src={bimg} />
      <div className="content">
        <h2 className="headline">PARKING JUST GOT A LOT SIMPLER</h2>
        <p className="paragraph"> Book the Best Spaces & Save Up to 50%</p>
        
      </div>
    </div>
  );
}

export default Background;

import React, { useState, useEffect } from "react";
import "./Spacemeter.css";

function Spacemeter() {
  const [twowheelslots, setTwowheelsots] = useState(200);
  const [fourwheelslots, setFourwheelslots] = useState(100);

  useEffect(() => {
    fetch("http://localhost:8080/api/availability")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTwowheelsots(data.twowheels);
          setFourwheelslots(data.fourwheels);
        }
      });
    let cycle = setInterval(() => {
      fetch("http://localhost:8080/api/availability")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setTwowheelsots(data.twowheels);
            setFourwheelslots(data.fourwheels);
          }
        });
    }, 10000);

    return () => {
      clearInterval(cycle);
    };
  }, []);

  return (
    <div className="spacemeter-container">
      <div className="container-inner">
        <p>{twowheelslots}</p>
        <p className="content">two wheeler lots available</p>

        <div className="meter-boundary">
          <div
            className="meter"
            style={{ width: `${(twowheelslots / 200) * 100}%` }}
          ></div>
        </div>
      </div>
      <div className="container-inner">
        <p>{fourwheelslots}</p>
        <p className="content">four wheeler lots available</p>

        <div className="meter-boundary">
          <div
            className="meter"
            style={{
              width: `${(fourwheelslots / 150) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Spacemeter;

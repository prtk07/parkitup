import React, { useState } from "react";
import "./Home.css";
import Spacemeter from "../Components/Spacemeter";
import Background from "../Components/Background";

function Home() {
  const [hour, setHour] = useState(0);
  const [toggleradio, setToggleradio] = useState(null);
  function handleChange(e) {
    setHour(e.target.value);
  }
  function display(h) {
    if (toggleradio) {
      return (
        <div className="displayfunctionmessage">
          Total parking charge is {Number(h * 5)} rupees
        </div>
      );
    } else if (toggleradio === false) {
      return (
        <div className="displayfunctionmessage">
          Total parking charge is {Number(h * 10)} rupees
        </div>
      );
    }
    return (
      <p className="displayfunctionmessage">Total parking charge is 0 rupees</p>
    );
  }
  function radiobuttonchange(e) {
    if (e.currentTarget.value === "2_wheeler") {
      setToggleradio(true);
    } else {
      setToggleradio(false);
    }
  }
  return (
    <div className="home-container">
      <Background />
      <Spacemeter />`{" "}
      <div className="pricing">
        <p className="instruction">Check price</p>
        <div className="radio-buttons">
          <div className="label-radio">
            <input
              type="radio"
              name="vehicle_type"
              value="2_wheeler"
              className="rbutton"
              onChange={radiobuttonchange}
            />
            <lable className="typeofvehicle2">2 Wheeler</lable>
          </div>
          <div className="label-radio">
            <input
              type="radio"
              name="vehicle_type"
              value="4_wheeler"
              className="rbutton"
              onChange={radiobuttonchange}
            />
            <lable className="typeofvehicle4">4 Wheeler</lable>
          </div>
        </div>
        <input
          className="hours-input"
          type="text"
          onChange={handleChange}
          placeholder="Enter Hours"
          required
        />
        <div className="display">{display(hour)}</div>
      </div>
    </div>
  );
}

export default Home;

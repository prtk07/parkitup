import React, { useState } from "react";
import "./DashboardReservation.css";

function DashboardReservation() {
  function gethours(dt1, dt2) {
    let date1 = new Date(dt1);
    let date2 = new Date(dt2);
    let diff = (date2.getTime() - date1.getTime()) / 1000;
    diff /= 3600;
    return Math.abs(Math.round(diff));
  }
  const [arrival, setArrival] = useState();
  const [departure, setDeparture] = useState();
  const [toggleradio, setToggleradio] = useState(null);
  function setarrival(e) {
    setArrival(e.target.value);
  }
  function setdeparture(e) {
    setDeparture(e.target.value);
  }
  function radiobuttonchange(e) {
    if (e.currentTarget.value === "2_wheeler") {
      setToggleradio(true);
    } else {
      setToggleradio(false);
    }
  }

  function display(h) {
    if (toggleradio) {
      return <div>Total Parking Charge ={Number(h * 5) } Rupees</div>;
    } else if (toggleradio == false) {
      return <div>Total Parking Charge = {Number(h * 10)} Rupees</div>;
    }
    return <p></p>;
  }
  // console.log(gethours(arrival, departure));
  return (
    <div className="parent">
      <div className="input">
        <lable className="arrivallable">Arrival Time</lable>
        <input className="arrivalinput" type="datetime-local" onChange={setarrival} />
        <lable className="departurelable">Departure Time</lable>
        <input className="departureinput" type="datetime-local" onChange={setdeparture} />
      </div>
        <lable className="vehiclelable">Vehicle Type</lable>
        <div className="buttons">
          <input
            type="radio"
            name="vehicle_type"
            value="2_wheeler"
            className="rbutton2"
            onChange={radiobuttonchange}
          />
          <lable  className="buttonlable">2 Wheeler</lable>
          <input
            type="radio"
            name="vehicle_type"
            value="4_wheeler"
            className="rbutton2"
            onChange={radiobuttonchange}
          />
          <lable className="buttonlable">4 Wheeler</lable>
        </div>
        <h4>{display(gethours(arrival, departure))}</h4>

        <button className="submitbutton" type="submit">Reserve</button>
    </div>
  );
}

export default DashboardReservation;

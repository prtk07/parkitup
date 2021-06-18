// import React from "react";
import { useState } from "react";
import "./AddVehiclepopup.css";

function AddVehiclepopup(props) {
  const [vehiclenumber, setVehiclenumber] = useState("");
  const [type, setType] = useState("");

  function changeType(e) {
    setType(e.target.value);
  }

  function addVehicles() {
    fetch("http://localhost:8080/api/addvehicles", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ vehiclenumber, type }),
    })
      .then((res) => res.json())
      .then((data) => {
        // let obj = {
        //   vehicleno: data.vehicleno,
        //   vehicletype: data.vehicletype,
        // };
        // console.log(obj);
        // console.log(data);
        // props.handleVehicleinfo([...props.vehiclesInfo, obj]);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Add Vehicles</h2>
        <input
          type="text"
          placeholder="Vehicle #"
          className="popup-input"
          onChange={(e) => {
            setVehiclenumber(e.target.value);
          }}
        />
        <div className="vehicle-type-section">
          <div className="radio-label">
            <input
              type="radio"
              name="vehicletype"
              value="twowheeler"
              onChange={changeType}
            />
            <p>Two Wheeler</p>
          </div>
          <div className="radio-label">
            <input
              type="radio"
              name="vehicletype"
              value="fourwheeler"
              onChange={changeType}
            />
            <p>Four Wheeler</p>
          </div>
        </div>
        <button
          onClick={() => {
            addVehicles();
            props.close();
          }}
        >
          Add Button
        </button>
      </div>
    </div>
  );
}

export default AddVehiclepopup;

import React, { useState, useEffect } from "react";
// import ReactTable from "react-table";

import "./DashboardInfo.css";

function DashboardInfo(props) {
  const [vehiclesInfo, setVehiclesInfo] = useState([
    { vehicleno: "UK06AQ6787", type: "four wheeler" },
    { vehicleno: "UK06A0754", type: "two wheeler" },
    { vehicleno: "UK06AQ6787", type: "four wheeler" },
    { vehicleno: "UK06A0754", type: "two wheeler" },
    { vehicleno: "UK06AQ6787", type: "four wheeler" },
    { vehicleno: "UK06A0754", type: "two wheeler" },
    { vehicleno: "UK06AQ6787", type: "four wheeler" },
    { vehicleno: "UK06A0754", type: "two wheeler" },
    { vehicleno: "UK06AQ6787", type: "four wheeler" },
    { vehicleno: "UK06A0754", type: "two wheeler" },
    { vehicleno: "UK06AQ6787", type: "four wheeler" },
    { vehicleno: "UK06A0754", type: "two wheeler" },
  ]);

  function addVehicles() {
    fetch("http://localhost:8080/api/addvehicle", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="dashboard-info-container">
      <h1>Welcome, Prateek Verma</h1>
      <div className="Info">
        <h3>Personal Information</h3>
        <p>
          <b>Name:</b> {props.user && props.user.name}
        </p>
        <p>
          <b>Username:</b> {props.user && props.user.username}
        </p>
        <p>
          <b>Mobile:</b> {props.user && props.user.mobile}
        </p>
      </div>

      <div className="vehicles">
        <h3>Vehicles</h3>

        {vehiclesInfo.map((val, index) => {
          return (
            <div className="vehicle" key={index}>
              <p>
                <b>Vehicle No. : </b>
                {val.vehicleno}
              </p>
              <p>
                <b>Vehicle Type : </b>
                {val.type}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardInfo;

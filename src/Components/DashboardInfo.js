import React, { useState, useEffect } from "react";
import AddVehiclepopup from "./AddVehiclepopup";
// import ReactTable from "react-table";

import "./DashboardInfo.css";

function DashboardInfo(props) {
  const [vehiclepopup, setVehiclepopup] = useState(false);
  const [vehiclesInfo, setVehiclesInfo] = useState([]);

  function handleVehicleinfo(vehicles) {
    setVehiclesInfo(vehicles);
    // console.log(vehicles);
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/getvehicles", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.message) alert(data.message);
          else {
            // console.log(data);
            handleVehicleinfo(data.vehicles);
          }
        } else {
          alert("Something went wrong");
        }
      })
      .catch((e) => {
        console.log("Server not responding");
      });

    return () => {
      handleVehicleinfo([]);
    };
  }, []);

  useEffect(() => {
    console.log(vehiclesInfo);
  }, [vehiclesInfo]);

  return (
    <div className="dashboard-info-container">
      {vehiclepopup && (
        <AddVehiclepopup
          vehiclesInfo={vehiclesInfo}
          handleVehicleinfo={handleVehicleinfo}
          close={() => {
            setVehiclepopup(false);
          }}
        />
      )}
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
        <button
          onClick={() => {
            setVehiclepopup(true);
          }}
        >
          Add Vehicle
        </button>
        {vehiclesInfo.length > 0 ? (
          vehiclesInfo.map((val, index) => {
            return (
              <div className="vehicle" key={index}>
                <p>
                  <b>Vehicle No. : </b>
                  {val.vehicleno}
                </p>
                <p>
                  <b>Vehicle Type : </b>
                  {val.vehicletype}
                </p>
              </div>
            );
          })
        ) : (
          <p>No Vehicles</p>
        )}
      </div>
    </div>
  );
}

export default DashboardInfo;

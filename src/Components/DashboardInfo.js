import React, { useState } from "react";
// import ReactTable from "react-table";

import "./DashboardInfo.css";

function DashboardInfo() {
  const [info, setInfo] = useState({
    name: "Prateek Verma",
    email: "prateekverma70@gmail.com",
    mobile: "8439144558",
    vehicles: [
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
    ],
  });
  return (
    <div className="dashboard-info-container">
      <h1>Welcome, Prateek Verma</h1>
      <div className="Info">
        <h3>Personal Information</h3>
        <p>
          <b>Name:</b> {info.name}
        </p>
        <p>
          <b>Email:</b> {info.email}
        </p>
        <p>
          <b>Mobile:</b> {info.mobile}
        </p>
      </div>

      <div className="vehicles">
        <h3>Vehicles</h3>

        {info.vehicles.map((val, index) => {
          return (
            <div className="vehicle">
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

import React from "react";
import "./DashboardMenu.css";

function DashboardMenu(props) {
  return (
    <div className="dashboardmenu-container">
      <div className="buttons-container">
        <button
          onClick={() => {
            props.changePage("Dashboard");
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            props.changePage("Reservation");
          }}
        >
          Reservation
        </button>
        <button
          onClick={() => {
            props.changePage("Cancellation");
          }}
        >
          Cancellation
        </button>
      </div>
    </div>
  );
}

export default DashboardMenu;

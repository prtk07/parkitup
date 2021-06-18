import React, { useState } from "react";
import DashboardInfo from "../Components/DashboardInfo";
import DashboardMenu from "../Components/DashboardMenu";
import DashboardReservation from "../Components/DashboardReservation";
import DashboardCancellation from "../Components/DashboardCancellation";
import "./Dashboard.css";

function Dashboard(props) {
  const [page, setPage] = useState("Dashboard");

  function changePage(pageview) {
    // console.log(pageview);
    setPage(pageview);
  }
  return (
    <div className="dashboard-container">
      <DashboardMenu changePage={changePage} />
      <div className="dashboard-content">
        {page === "Dashboard" && <DashboardInfo user={props.user} />}
        {page === "Reservation" && <DashboardReservation />}
        {page === "Cancellation" && <DashboardCancellation />}
      </div>
    </div>
  );
}

export default Dashboard;

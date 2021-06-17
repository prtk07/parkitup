import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>Parkitup</h2>
      <div className="header-links">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/Login">Login</Link>
        </p>
      </div>
    </header>
  );
}

export default Header;

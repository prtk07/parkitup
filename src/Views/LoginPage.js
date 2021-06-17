import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [login, setLogin] = useState(true);
  function toggleLogin() {
    setLogin(!login);
  }

  return (
    <div className="login-container">
      {login ? (
        <div className="login">
          <h1>Login</h1>
          <div className="inputs">
            {/* <p>Username</p> */}
            <input placeholder="Email" className="input-box" type="text" />
            {/* <p>Password</p> */}
            <input
              placeholder="Password"
              className="input-box"
              type="password"
            />
          </div>
          <button>Login</button>
          <div className="signup-link-container">
            <p>Not registered yet?</p>
            <p className="signup-link" onClick={toggleLogin}>
              Signup
            </p>
          </div>
        </div>
      ) : (
        <div className="login" style={{ padding: "0px" }}>
          <h1>Signup</h1>
          <div className="inputs">
            <input placeholder="Name" className="input-box" type="text" />
            <input placeholder="Email" className="input-box" type="text" />
            <input
              placeholder="Password"
              className="input-box"
              type="password"
            />

            <input placeholder="Mobile" className="input-box" type="text" />
          </div>
          <button>Signup</button>
          <div className="signup-link-container">
            <p>Already a User?</p>
            <p className="signup-link" onClick={toggleLogin}>
              Login
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;

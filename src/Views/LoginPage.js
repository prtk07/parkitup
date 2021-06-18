import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage(props) {
  // const history = useHistory();
  const [loginpage, setLoginpage] = useState(true);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  function toggleLogin() {
    setLoginpage(!loginpage);
  }

  function Signup(a, b, c, d) {
    // console.log(a, b, c, d);
    fetch("http://localhost:8080/api/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: a,
        password: b,
        name: c,
        mobile: d,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) alert(data.message);
        else {
          // console.log(data);
          props.handleUser(data.user);
          localStorage.setItem("token", data.token);
          props.setauth();
          // history.goBack();
        }
      })
      .catch((e) => {
        alert("Server Not Responding");
      });
  }

  function Login(userName, pass) {
    fetch("http://localhost:8080/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: pass,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) alert(data.message);
        else {
          let obj = {
            name: data.user.name,
            username: data.user.username,
            mobile: data.user.mobile,
          };

          props.handleUser(obj);
          localStorage.setItem("token", data.token);
          props.setauth();

          // history.goBack();
        }
      })
      .catch((e) => {
        // console.log(e);
        alert("Server Not Responding");
      });
  }

  return (
    <div className="login-container">
      {loginpage ? (
        <div className="login">
          <h1>Login</h1>
          <div className="inputs">
            <input
              placeholder="Username"
              className="input-box"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              className="input-box"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            onClick={() => {
              console.log("fuck login");
              Login(username, password);
            }}
          >
            Login
          </button>

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
            <input
              placeholder="Name"
              className="input-box"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              placeholder="username"
              className="input-box"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              className="input-box"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <input
              placeholder="Mobile"
              className="input-box"
              type="text"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => {
              Signup(username, password, name, mobile);
            }}
          >
            Signup
          </button>
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

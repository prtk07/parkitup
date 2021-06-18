import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Views/Home";
import Header from "./Components/Header";
import LoginPage from "./Views/LoginPage";
import Dashboard from "./Views/Dashboard";

function App() {
  const [userinfo, setUserInfo] = useState({});
  const [auth, setAuth] = useState(false);

  function handleUserinfo(obj) {
    setUserInfo({
      name: obj && obj.name,
      username: obj && obj.username,
      mobile: obj && obj.mobile,
    });
  }

  function setauth() {
    setAuth(true);
  }

  useEffect(() => {
    console.log(userinfo);
  }, [userinfo]);

  useEffect(() => {
    setAuth(false);
    setUserInfo({});
    localStorage.removeItem("token");
  }, []);

  return (
    <div className="App">
      <Router>
        <Header auth={auth} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            {localStorage.token ? (
              <Redirect to="/" />
            ) : (
              <LoginPage setauth={setauth} handleUser={handleUserinfo} />
            )}
          </Route>
          <Route path="/dashboard">
            {localStorage.token ? (
              <Dashboard user={userinfo} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

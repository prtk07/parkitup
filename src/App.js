import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Views/Home";
import Header from "./Components/Header";
import LoginPage from "./Views/LoginPage";
import Dashboard from "./Views/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            {localStorage.token ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <Route path="/dashboard">
            {localStorage.token ? <Dashboard /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import  ReactDOM  from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Home from "./Views/Home"
import Profile from "./Views/Profile"


function App() {
  return (
    <div>
      <Header />
      <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Switch>
    </div>
  );
}

export default App;

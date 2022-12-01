import React from "react";
import  ReactDOM  from "react";
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/globalStyles";
import theme from "./config/theme.js";
import Header from "./Components/Header";
import Home from "./Views/Home"
import Profile from "./Views/Profile"
import Schedule from "./Views/Schedule"
import Create from "./Views/Create"


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <Header />
          <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/Schedule">
                    <Schedule />
                  </Route>
                  <Route path="/Create">
                    <Create />
                  </Route>
                  <Route path="/Profile">
                    <Profile />
                  </Route>
                </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

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

const todo = [
  {
    due: "01/11/2022",
    name: "Web Apps"
  },
  {
    due: "Feb 17 2022",
    name: "Data Science"
  },
  {
    due: "Mar 27 2022",
    name: "UX"
  },
  {
    due: "June 4 2022",
    name: "Revision"
  },
]


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <Header />
          <Switch>
                  <Route exact path="/">
                    <Home todo={todo}/>
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

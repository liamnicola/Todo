import { initializeApp } from "firebase/app";
import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/globalStyles";
import theme from "./config/theme.js";
import firebaseConfig from "./config/firebase";
import useAuth from "./services/firebase/useAuth";
import Header from "./Components/Header";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Schedule from "./Views/Schedule";
import Create from "./Views/Create";
import Login from "./Views/Login";
import Join from "./Views/Join";

const todo = [
  {
    due: "01/11/2022",
    name: "Web Apps",
  },
  {
    due: "Feb 17 2022",
    name: "Data Science",
  },
  {
    due: "Mar 27 2022",
    name: "UX",
  },
  {
    due: "June 4 2022",
    name: "Revision",
  },
];

function Protected({ authenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  initializeApp(firebaseConfig);
  const location = useLocation();
  const { isAuthenticated, createEmailUser, signInEmailUser, signUserOut } =
    useAuth();
  const history = useHistory();
  const hideHeader =
    location.pathname === "/join" || location.pathname === "/login" ? null : (
      <Header />
    );
  useEffect(() => {
    if (isAuthenticated) {
      history.push(history.location.state.from.pathname);
      return;
    }
    return;
  }, [isAuthenticated]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        {hideHeader}
        <GlobalStyles />
        <div>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Switch>
            <Protected authenticated={isAuthenticated} exact path="/">
              <Home todo={todo} />
            </Protected>

            <Protected authenticated={isAuthenticated} exact path="/Schedule">
              <Schedule todo={todo} />
            </Protected>
            <Protected authenticated={isAuthenticated} exact path="/Create">
              <Create todo={todo} />
            </Protected>
            <Protected authenticated={isAuthenticated} exact path="/">
              <Profile />
            </Protected>
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

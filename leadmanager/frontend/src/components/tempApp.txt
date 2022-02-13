import * as React from "react";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Dashboard from "./Dashboard/Dashboard";
import SignInSide from "./Auth/SignInSide";
import SignUpSide from "./Auth/SignUpSide";
import Posts from "./Posts/Posts";

import "./Posts.css";
import "./EditProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SendPostForm from "./SendPost/SendPostForm";
import SendReqForm from "./SendReq/SendReqForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Dashboard/Dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/Auth/SignInSide">
            <SignInSide />
          </Route>
          <Route exact path="/Auth/SignUpSide">
            <SignUpSide />
          </Route>
          <Route exact path="/Posts/Posts">
            <Posts />
          </Route>
          <Route exact path="/Posts/Posts">
            <Posts />
          </Route>
          <Route exact path="/SendPost/SendPostForm">
            <SendPostForm />
          </Route>
          <Route exact path="/SendReq/SendReqForm">
            <SendReqForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

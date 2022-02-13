import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

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

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// import Header from './layout/Header';
// // import Dashboard from './layout/Dashboard'
// import Dashboard from "./Dashboard/Dashboard";
import Alerts from "./layout/Alerts";
// // import Login from "./accounts/Login"
// import Register from "./accounts/Register"
// import PrivateRoute from "./common/PrivateRoute"

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            {/* <Header /> */}
            <Alerts />
            <Routes>
              {/* <Route exact path="/" element={<PrivateRoute path="/home-def"><Dashboard /></PrivateRoute>} /> */}
              {/* <Route exact path="/" element={<Dashboard />} />
                        <Route exact path="home-def" element={<h1>Home Default</h1>} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/login" element={<Login />} /> */}
              <Route exact path="/" element={<HomePage/>}/>
                {/* <HomePage /> */}
              <Route exact path="/Dashboard/Dashboard" element={<Dashboard/>}/>
              {/* </Route> */}
              <Route exact path="/Auth/SignInSide" element={<SignInSide />}/>
                
              {/* </Route> */}
              <Route exact path="/Auth/SignUpSide" element={<SignUpSide />}/>
                
              {/* </Route> */}
              <Route exact path="/Posts/Posts" element={<Posts />}/>
                
              {/* </Route> */}
              <Route exact path="/SendPost/SendPostForm" element={<SendPostForm />}/>
                
              {/* </Route> */}
              <Route exact path="/SendReq/SendReqForm" element={<SendReqForm />}/>
                
              {/* </Route> */}
            </Routes>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

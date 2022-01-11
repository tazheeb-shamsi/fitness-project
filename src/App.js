import React from "react"
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import "./App.css"


import {
  HashRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Start from "./Pagess/Start";
import Registration from "./Pagess/Registration";
import Login from "./Pagess/Login";
import Goal from "./Pagess/Goal";
import Activity from "./Pagess/Activity";
import Home from "./Pagess/Home";
import Profile from "./Pagess/Profile"
import Diet from "./Pagess/Diet";
import Videos from "./Pagess/Videos";
import Workouts from "./Pagess/Workouts";
import Contact from "./Pagess/Contact";



function App() {


  return (
    <>


      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>

            <Route exact path="/Registration">
              <Registration />
            </Route>

            <Route exact path="/Login">
              <Login />
            </Route>

            <Route exact path="/Goal">
              <Goal />
            </Route>
            <Route exact path="/Activity">
              <Activity />
            </Route>

            <Route exact path="/Home">
              <Home />
            </Route>

            <Route exact path="/Profile">
              <Profile />
            </Route>

            <Route exact path="/Videos">
              <Videos />
            </Route>

            <Route exact path="/Diet">
              <Diet />
            </Route>

            <Route exact path="/Workouts">
              <Workouts />
            </Route>

            <Route exact path="/Contact">
              <Contact />
            </Route>

          </Switch>

        </div>
      </Router>
    </>

  );
}

export default App;

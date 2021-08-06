import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./Landing";
// import Login from "./Login";
import React from 'react';
import CallAPI from './Return';
//import CallAPI from './Token';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div>{"Application home"}</div>
            <Auth />
          </Route>
          <Route path="/login">
            {/* <Login /> */}
            <CallAPI />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Navigation from "./components/Navigation/Navigation";
// import Album_Sidebar from "./components/Album_Sidebar/Album_Sidebar";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import "./App.css";
import "./reset.css";

function App(props) {
  console.log(props.location);
  return (
    <div>      
      <div className="app">
        <header className="projectHeader">
          {props.location.pathname === "/" ? null : props.location.pathname === "/Registration" ? null : (<Navigation />)}
          {/* {props.location.pathname === "/" ? null : props.location.pathname === "/Registration" ? null : (<Album_Sidebar />)} */}
          {routes}
        </header>
      </div>
      <div className="background2"></div>
    </div>
  );
}

export default withRouter(App);

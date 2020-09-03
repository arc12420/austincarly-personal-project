import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
// import Album_Sidebar from "./components/Album_Sidebar/Album_Sidebar";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import "./App.css";
import "./reset.css";
import axios from "axios";
import { loginUser } from "../src/redux/reducer";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    axios.get("/api/verify").then((res) => {
      if (res.data.userId) {
        this.props.loginUser(res.data);
      }
    });
  }

  render() {
    console.log(this.props.location);
    return (
      <div>
        <div className="app">
          <header className="projectHeader">
            {this.props.location.pathname === "/" ? null : this.props.location
                .pathname === "/Registration" ? null : (
              <Navigation />
            )}
            {routes}
          </header>
        </div>
        <div className="background2"></div>
      </div>
    );
  }
}

export default connect(null, { loginUser })(withRouter(App));

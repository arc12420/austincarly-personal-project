import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./Navigation_Tabs.css";
import Home from "../Home/Home";

class NavTabs extends Component {

  parser = (string) => {
    let newString = string.split("/");
    console.log(newString);
    return newString[2];
  };

  togglePopup2 = () => {
    document.getElementById("homeAlbums").classList.toggle("active");
    console.log(this.togglePopup);
  };

  render() {
    console.log(this.props);
    return (
      <nav className="navigationTabsComponent">
        <div
          className="homeButtonTab"
          onClick={() => this.props.history.push("/Home")}
        >
          {" "}
          Home{" "}
        </div>
        <div className="navigationAddPhotoButtonTab">
          {this.props.location.pathname.includes("photos") ? (
            <h3
              onClick={() =>
                this.props.history.push(
                  `/Add_Photo/${this.parser(this.props.location.pathname)}`
                )
              }
            >
              Add Photo
            </h3>
          ) : null}
        </div>
        <div
          className="addPostTab"
          onClick={() => this.props.history.push("/Add_Post")}
        >
          {" "}
          Add Post
        </div>
        {/* <Home.HomeAlbums> */}
        <div
          className="PhotoAlbumsTab"
          onClick={() => this.togglePopup2}
        >
          {" "}
          Photo Albums
        </div>
        {/* </Home.HomeAlbums> */}
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(NavTabs)
);
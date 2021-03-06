import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./Navigation.css";
import logo from "../../Logo.png";
import axios from "axios";

// import axios from "axios";

class Nav extends Component {
  // componentDidMount() {
  //   this.props.getUser();
  // }

  logout = () => {
    axios
      .get("/api/logout")
      .then((res) => {
        this.props.logoutUser();
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  parser = (string) => {
    let newString = string.split("/");
    console.log(newString);
    return newString[2];
  };

  render() {
    console.log(this.props);
    return (
      <nav className="navigationComponent">
        <img src={logo} className="navLogo" alt="Logo" />
        <div
          className="homeButton"
          onClick={() => this.props.history.push("/Home")}
        >
          {" "}
          Home{" "}
        </div>
        <div className="navigationAddPhotoButton">
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
          className="addPost"
          onClick={() => this.props.history.push("/Add_Post")}
        >
          {" "}
          Add Post
        </div>
        <div className="profileBox">
          <div className="welcomeAndEdit">
            <p className="navWelcome">Welcome, {this.props.user.firstName}!</p>
            <p className="editProfileButton">Edit Profile</p>
            <p
              className="navSignout"
              onClick={this.logout}
              className="signOutButton"
            >
              Sign-out
            </p>
          </div>
          <div className="profilePicBox">
            <img
              className="navProfilePic"
              alt="Profile Pic"
              src={this.props.user.profilePic}
            />
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(Nav)
);

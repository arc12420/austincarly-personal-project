import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./Navigation.css";
import logo from "../../Logo.png";

// import axios from "axios";

class Nav extends Component {
  // componentDidMount() {
  //   this.props.getUser();
  // }

  render(props) {
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
        {/* {props.location.pathname === "/Photos" ?( null ) : (<div className="addPhotoButton" onClick={() => this.props.history.push("/Add_Photo")}> Add Photo </div>)} */}
        <div
          className="addPost"
          onClick={() => this.props.history.push("/Add_Post")}
        >
          {" "}
          Add Post
        </div>
        <div className="profileBox">
    <div className="welcomeAndEdit">Welcome, {this.props.user.firstName}! Edit Profile</div>
          <div className="profilePicAndSign-out">
            <img className="profilePic" />
            <h2 onClick={() => this.props.history.push("/")}>Sign-out</h2>
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

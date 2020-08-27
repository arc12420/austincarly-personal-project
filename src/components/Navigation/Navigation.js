import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./Navigation.css";

// import axios from "axios";

class Nav extends Component {
  componentDidMount() {
    this.props.getUser();
  }

//   logout = () => {
//     axios
//       .get("/api/logout")
//       .then((res) => {
//         this.props.logoutUser();
//         this.props.history.push("/");
//       })
//       .catch((err) => console.log(err));
//   };

  render() {
    console.log(this.props);
    return (
      <nav className="navigationComponent">
        <img className="navLogo" alt="Logo" />
        <div className="homeButton" onClick={() => this.props.history.push("/Home")}> Home </div>
        <div className="addPhotoButton" onClick={() => this.props.history.push("/Add_Photo")}> Add Photo </div>
        <div className="addPost" onClick={() => this.props.history.push("/Add_Post")}> Add Post</div>
        <div className="profileBox">
          <div className="welcomeAndEdit">
            Welcome,  !
            Edit Profile
          </div>
          <div className="profilePicAndSign-out">
            <img className="profilePic"/>
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
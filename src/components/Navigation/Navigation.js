import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
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
      <nav>
          Navigation
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(Nav)
);
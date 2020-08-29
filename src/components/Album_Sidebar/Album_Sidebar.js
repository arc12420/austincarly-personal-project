import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./Album_Sidebar.css";

// import axios from "axios";

class Album_Sidebar extends Component {

  render(props) {
    console.log(this.props);
    return (
      <nav className="albumSidebarComponent">
        
      </nav>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(Album_Sidebar)
);

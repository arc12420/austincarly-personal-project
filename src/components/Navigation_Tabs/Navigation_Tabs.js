import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/reducer";
import "./Navigation_Tabs.css";
import axios from "axios";
import Album from "../Album/Album";
// import Home from "../Home/Home";

class NavTabs extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  async getData() {
    const albums = await axios.get("/api/albums");
    this.setState({
      albums: albums.data,
    });
  }

  // parser = (string) => {
  //   let newString = string.split("/");
  //   console.log(newString);
  //   return newString[2];
  // };

  // togglePopup2 = () => {
  //   document.getElementById("homeAlbums").classList.toggle("active");
  //   console.log(this.togglePopup);
  // };

  render() {
    console.log(this.props);
    const arr2 = this.state.albums.map((element, index) => {
      return (
        <div className="allAlbumNamesTab">
          <li>
            <div className="smallestAlbumName">
              <Album className="albumNamesComp" albums={element} />
            </div>
            <hr />
          </li>
        </div>
      );
    });
    return (
      <div className="wholeComponent">
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
          <div className="PhotoAlbumsTab" onClick={() => this.togglePopup2}>
            {" "}
            Photo Albums
          </div>
        </nav>
        <div className="homeAlbumListTabs">
          <ul>{arr2}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, getUser })(
  withRouter(NavTabs)
);

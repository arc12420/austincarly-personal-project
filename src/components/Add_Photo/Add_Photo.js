import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import "./Add_Photo.css";

class Add_Photo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: "",
    };
  }

  render() {
    return (
      <div className="addPhotoComponent">
        <main className="addPhotoBox">
          Add Photo Component
          <div className="inputs">
            <input className="addPhotoTitle" placeholder="Title" />
            <input className="addPhotoURL" placeholder="Image URL" />
          </div>
          <div className="addPhotoButtons">
            <button
              onClick={() => this.props.history.push("/Photos/:AlbumName")}
            >
              {" "}
              Save{" "}
            </button>
            <button
              onClick={() => this.props.history.push("/Photos/:AlbumName")}
            >
              {" "}
              Cancel{" "}
            </button>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Add_Photo);

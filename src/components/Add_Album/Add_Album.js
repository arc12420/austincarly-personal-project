import React, { Component } from "react";
import "./Add_Album.css";
import axios from "axios";

class Add_Album extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }

  handleTitle = (value) => {
    this.setState({ title: value });
  };

  render(props) {
    return (
      <div className="popup" id="popup-1">
        <div class="overlay">
          <div className="resetStyling">
            <div className="content">
              <div className="titleImagePageTitle">
                <h6>Name Your Album</h6>
                <input
                  onChange={(event) => this.handleTitle(event.target.value)}
                  placeholder="Title"
                  className="addAlbumInput"
                  value={this.state.title}
                />
              </div>
              <div className="addAlbumButtons">
                <button
                  className="popUpBtnz"
                  onClick={() => {
                    this.props.makeAlbum(this.state.title);
                    this.props.togglePopup();
                  }}
                >
                  Add
                </button>
                <button
                  className="popUpBtnz"
                  onClick={() => {
                    this.handleTitle("");
                    this.props.togglePopup();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add_Album;

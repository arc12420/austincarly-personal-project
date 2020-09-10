import React, { useState } from "react";
import "./Add_Album.css";

function Add_Album(props) {
  const [title, setTitle] = useState([]);

  const handleTitle = (value) => {
    setTitle(value);
  };
  return (
    <div className="popup" id="popup-1">
      <div class="overlay">
        <div className="resetStyling">
          <div className="content">
            <div className="titleImagePageTitle">
              <h6>Name Your Album</h6>
              <input
                onChange={(event) => handleTitle(event.target.value)}
                placeholder="Title"
                className="addAlbumInput"
                value={title}
              />
            </div>
            <div className="addAlbumButtons">
              <button
                className="popUpBtnz"
                onClick={() => {
                  props.makeAlbum(title);
                  props.togglePopup();
                }}
              >
                Add
              </button>
              <button
                className="popUpBtnz"
                onClick={() => {
                  handleTitle("");
                  props.togglePopup();
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

export default Add_Album;

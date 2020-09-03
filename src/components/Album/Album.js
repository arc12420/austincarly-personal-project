import React from "react";
import { withRouter } from "react-router-dom";
import "./Album.css";

function Album(props) {
  // console.log(props);
  return (
    <div className="albumComponent">
      <p onClick={() => props.getAlbum(props.albums.id)}>
        {props.albums.title}
      </p>
      <b
        className="albumDelete"
        onClick={() => props.dltAlbum(props.albums.id)}
      >
        {" "}
        X{" "}
      </b>
    </div>
  );
}

export default withRouter(Album);

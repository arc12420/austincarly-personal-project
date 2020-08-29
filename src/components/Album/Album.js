import React from "react";
import { withRouter } from "react-router-dom";
import "./Album.css";

function Album(props) {
  console.log(props)
  return (
    <div className="albumComponent">
      {/* {props.Album.title} */}
    </div>
  );
}

export default withRouter(Album);

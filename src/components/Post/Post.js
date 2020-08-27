import React from "react";
import { withRouter } from "react-router-dom";
import "./Post.css";

function Post(props) {
  return (
    <div className="postComponent">
      Post Component
      <div className="namePicAndTitle">
          NAME
          <div className="picAndTitle">
            TITLE
          </div>
        </div>
        <div className="updateAndPost">
          <h5> EDIT </h5>
          <h5> X </h5>
          <div className="PostInfo">
            <img className="PostPic"/>
            <h5>POST</h5>
          </div>

        </div>
    </div>
  );
}

export default withRouter(Post);
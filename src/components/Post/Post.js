import React from "react";
import { withRouter } from "react-router-dom";
import "./Post.css";

function Post(props) {
  console.log(props)
  return (
    <div className="postComponent">
      <div className="namePicAndTitle">
        {props.posts.title}
        <div className="picAndTitle">
          <img alt="profilePic" />
          TITLE
        </div>
      </div>
      <div className="updateAndPost">
        <h5> EDIT </h5>
        <h5> X </h5>
        <div className="PostInfo">
          <img alt="postPic" />
          <h5>POST</h5>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Post);

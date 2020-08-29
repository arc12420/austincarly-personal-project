import React from "react";
import { withRouter } from "react-router-dom";
import "./Post.css";

function Post(props) {
  console.log(props);
  
  return (
    <div className="postComponent">
      <div className="namePicAndTitle">
        <div className="picAndTitle">
          <img alt="profilePic" />
          {props.posts.author}
          {props.posts.title}
        </div>
      </div>
      <div className="updateAndPost">
        <div className="postButtons">
          <h5 className="editAndX"> EDIT </h5>
          <h5 onClick={() => props.dlt(props.posts.id)} className="editAndX" > X </h5>
        </div>
        <div className="postInfo">
          <img src={props.posts.img} alt="uploadedImage" className="uploadedImage" />
          {props.posts.post}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Post);

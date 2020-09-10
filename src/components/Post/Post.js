import React from "react";
import { withRouter } from "react-router-dom";
import "./Post.css";

function Post(props) {
  // console.log(props.posts.id);
  // console.log(props.history);
  return (
    <div className="postComponent">
      <div className="namePicAndTitle">
        <div className="picAndTitle">
          <img
            alt="profilePic"
            className="profilePic"
            src={props.posts.profilepic}
          />
          {props.posts.firstname}
          <br />
          {props.posts.lastname}
        </div>
      </div>
      <div className="updateAndPost">
        <div className="titleAndButtons">
          <div className="profileInfoTwo">
            <img
              alt="profilePic"
              className="profilePicTwo"
              src={props.posts.profilepic}
            />
            <div className="profileNamesTwo">
              <p className="profileFirstNameTwo">{props.posts.firstname}</p>
              {/* <br /> */}
              <p className="profileLastNameTwo">{props.posts.lastname}</p>
            </div>
          </div>
          <div className="postTitle">{props.posts.title}</div>
          <div className="postButtons">
            <h5
              className="editAndX"
              onClick={() => props.history.push(`/Edit/${props.posts.id}`)}
            >
              {" "}
              EDIT{" "}
            </h5>
            <h5 onClick={() => props.dlt(props.posts.id)} className="editAndX">
              {" "}
              X{" "}
            </h5>
          </div>
        </div>
        <div className="postInfo">
          <img src={props.posts.img} className="uploadedImage" />
          <div className="postContent">{props.posts.post}</div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Post);

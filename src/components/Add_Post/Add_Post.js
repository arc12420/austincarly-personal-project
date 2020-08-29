import React, { Component } from "react";
import "./Add_Post.css";
import axios from "axios";

class Add_Post extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      post: "",
    };
  }
  handleTitle = (value) => {
    this.setState({title: value});
  }
  handleImg = (value) => {
    this.setState({img: value});
  }
  handlePost = (value) => {
    this.setState({post: value});
  }

  makePost = () => {
    const{title, img, post} = this.state
    axios.post("/api/addPost", {title, img, post})
    .then((res) => {
      this.props.history.push("/Home");
    })
  }

  render() {
    return (
      <div className="addPostComponent">
        <main className="addPostBox">
          <div className="titleImagePageTitle">
            <div className="addPostInputs">
              <input onChange={(event) => this.handleTitle(event.target.value)} className="postInput" placeholder="Post Title" />
              <input onChange={(event) => this.handleImg(event.target.value)} className="postInput" placeholder="Image URL" />
            </div>
            <h6>Create New Post</h6>
          </div>
          <input onChange={(event) => this.handlePost(event.target.value)} className="postInputBox" placeholder="Enter Post Here" />
          <div className="addPostButtons">
            <button onClick={this.makePost}>
              Post
            </button>
            <button onClick={() => this.props.history.push("/Home")}>
              Cancel
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default Add_Post;

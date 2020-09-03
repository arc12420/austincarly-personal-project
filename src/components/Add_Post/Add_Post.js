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
      edit: false
    };
  }

  componentDidMount() {
    console.log(this.props);
    // console.log(this.props.match.params.id)
    if (this.props.match.params.id) {
      axios
        .get(`/api/getPost/${this.props.match.params.id}`)
        .then((res) => {
          // console.log(res.data)
          this.setState({
            edit: true,
            title: res.data.title,
            img: res.data.img,
            post: res.data.post,
          });
        });
    }
    // console.log(this.state)
  }

  handleTitle = (value) => {
    this.setState({ title: value });
  };
  handleImg = (value) => {
    this.setState({ img: value });
  };
  handlePost = (value) => {
    this.setState({ post: value });
  };

  makePost = () => {
    const { title, img, post } = this.state;
    axios.post("/api/addPost", { title, img, post }).then((res) => {
      this.props.history.push("/Home");
    });
  };

  updatePost = () => {
    axios
      .put(`/api/updatePost/${this.props.match.params.id}`, { ...this.state })
      .then((res) => {
        this.props.history.push("/Home");
      });
  };

  render() {
    return (
      <div className="addPostComponent">
        <main className="addPostBox">
          <div className="titleImagePageTitles">
            <div className="addPostInputs">
              <input
                onChange={(event) => this.handleTitle(event.target.value)}
                className="postInput"
                placeholder="Post Title"
                value={this.state.title}
              />
              <input
                onChange={(event) => this.handleImg(event.target.value)}
                className="postInput"
                placeholder="Image URL"
                value={this.state.img}
              />
            </div>
            <div className="addPostPageTitleBox">
              {!this.state.edit ? (
              <h6 className="addPostPageTitle">Create New Post</h6>
              ) : (
              <h6 className="addPostPageTitle">Edit Post</h6>
              )}
            </div>
          </div>
          <textarea
            onChange={(event) => this.handlePost(event.target.value)}
            className="postInputBox"
            placeholder="Enter Post Here"
            value={this.state.post}
          />
          <div className="addPostButtons">
            {!this.state.edit ? (
            <button onClick={this.makePost}>Post</button>
            ) : (
              <button onClick={this.updatePost}> Save </button>
            )}
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

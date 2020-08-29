import React, { Component } from "react";
import axios from "axios";
import Post from "../Post/Post";
import Album from "../Album/Album";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      albums: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  async getData() {
    const post = await axios.get("/api/posts");
    const albums = await axios.get("/api/albums");
    this.setState({
      posts: post.data,
      albums: albums.data,
    });
  }
  

  dlt = (id) => {
    axios.delete(`/api/deletePost/${id}`).then((res) => {
      this.getData();
    });
  };

  render() {
    const arr = this.state.posts.map((element, index) => {
      return (
        <div className="pullPost">
          <Post className="postComp" posts={element} dlt={this.dlt} />
        </div>
      );
    });
    const arr2 = this.state.albums.map((element, index) => {
      return (
        <div className="allAlbumNames">
          <Album className="albumNamesComp" albums={element} delete={this.delete} />
        </div>
      );
    });
    return (
      <div className="homePage">
        <div className="space" />
        <main className="homePagePosts">{arr}</main>
        <div className="homeAlbums">
          <h5>
            Family <br /> Photo <br /> Albums{" "}
          </h5>
          <h3 className="homeAddAlbum">Add Album</h3>
          <div className="homeAlbumList">{arr2}</div>
        </div>
      </div>
    );
  }
}

export default Home;

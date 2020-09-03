import React, { Component } from "react";
import axios from "axios";
import Post from "../Post/Post";
import Album from "../Album/Album";
import Add_Album from "../Add_Album/Add_Album";
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

  makeAlbum = (title) => {
    axios.post("/api/addAlbum", { title }).then((res) => {
      this.setState({
        albums: res.data,
      });
    });
    // () => {this.togglePopup};
  };

  dlt = (id) => {
    axios.delete(`/api/deletePost/${id}`).then((res) => {
      this.getData();
    });
  };

  dltAlbum = (id) => {
    axios.delete(`/api/deleteAlbum/${id}`).then((res) => {
      this.getData();
    });
  };

  getAlbum = (id) => {
    this.props.history.push(`/photos/${id}`);
  };

  togglePopup = () => {
    document.getElementById("popup-1").classList.toggle("active");
    console.log(this.togglePopup);
  };

  render() {
    // console.log(this.state.posts)
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
          <Album
            className="albumNamesComp"
            albums={element}
            dltAlbum={this.dltAlbum}
            getAlbum={this.getAlbum}
            />
        </div>
      );
    });
    console.log(this.arr)
    return (
      <div className="homePage">
        <div className="space" />
        <main className="homePagePosts">{arr}</main>
        <div className="homeAlbums">
          <h5>
            Family <br /> Photo <br /> Albums{" "}
          </h5>
          <hr />
          <div className="dropDownBox">
            <h3 onClick={this.togglePopup} className="homeAddAlbum">
              Add Album
            </h3>
          </div>
          <Add_Album
            togglePopup={this.togglePopup}
            className="dropContent"
            makeAlbum={this.makeAlbum}
          />
          <hr />
          <div className="homeAlbumList">{arr2}</div>
        </div>
      </div>
    );
  }
}

export default Home;

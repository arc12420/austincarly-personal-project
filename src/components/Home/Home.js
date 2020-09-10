import React, { useState, useEffect } from "react";
import axios from "axios";
import Album from "../Album/Album";
import Post from "../Post/Post";
import Add_Album from "../Add_Album/Add_Album";
import "./Home.css";

function Home(props) {
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const post = await axios.get("/api/posts");
    const albums = await axios.get("/api/albums");
    setPosts(post.data);
    setAlbums(albums.data);
  }

  const makeAlbum = (title) => {
    axios.post("/api/addAlbum", { title }).then((res) => {
      setAlbums(res.data);
    });
  };

  const dlt = (id) => {
    axios.delete(`/api/deletePost/${id}`).then((res) => {
      getData();
    });
  };

  const dltAlbum = (id) => {
    axios.delete(`/api/deleteAlbum/${id}`).then((res) => {
      getData();
    });
  };

  const getAlbum = (id) => {
    props.history.push(`/photos/${id}`);
  };

  const togglePopup = () => {
    document.getElementById("popup-1").classList.toggle("active");
  };

  const arr = posts.map((element, index) => {
    return (
      <div className="pullPost">
        <Post className="postComp" posts={element} dlt={dlt} />
      </div>
    );
  });
  const arr2 = albums.map((element, index) => {
    return (
      <div className="allAlbumNames">
        <Album
          className="albumNamesComp"
          albums={element}
          dltAlbum={dltAlbum}
          getAlbum={getAlbum}
        />
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
        <hr />
        <div className="dropDownBox">
          <h3 onClick={togglePopup} className="homeAddAlbum">
            Add Album
          </h3>
        </div>
        <Add_Album
          togglePopup={togglePopup}
          className="dropContent"
          makeAlbum={makeAlbum}
        />
        <hr />
        <div className="homeAlbumList">{arr2}</div>
      </div>
    </div>
  );
}

export default Home;

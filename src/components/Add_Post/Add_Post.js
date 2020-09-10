import React, { useState, useEffect } from "react";
import "./Add_Post.css";
import axios from "axios";

function Add_Post(props) {
  const [title, setTitle] = useState([]);
  const [img, setImg] = useState([]);
  const [post, setPost] = useState([]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    cDM();
  }, []);
  function cDM() {
    if (props.match.params.id) {
      axios.get(`/api/getPost/${props.match.params.id}`).then((res) => {
        setEdit(true);
        setTitle(res.data.title);
        setImg(res.data.img);
        setPost(res.data.post);
      });
    }
  }

  const handleTitle = (value) => {
    setTitle(value);
  };
  const handleImg = (value) => {
    setImg(value);
  };
  const handlePost = (value) => {
    setPost(value);
  };

  const makePost = () => {
    axios.post("/api/addPost", { title, img, post }).then((res) => {
      props.history.push("/Home");
    });
  };

  const updatePost = () => {
    axios
      .put(`/api/updatePost/${props.match.params.id}`, { title, img, post })
      .then((res) => {
        props.history.push("/Home");
      });
  };

  return (
    <div className="addPostComponent">
      <main className="addPostBox">
        <div className="titleImagePageTitles">
          <div className="addPostInputs">
            <input
              onChange={(event) => handleTitle(event.target.value)}
              className="postInput"
              placeholder="Post Title"
              value={title}
            />
            <input
              onChange={(event) => handleImg(event.target.value)}
              className="postInput"
              placeholder="Image URL"
              value={img}
            />
          </div>
          <div className="addPostPageTitleBox">
            {!edit ? (
              <h6 className="addPostPageTitle">Create New Post</h6>
            ) : (
              <h6 className="addPostPageTitle">Edit Post</h6>
            )}
          </div>
        </div>
        <textarea
          onChange={(event) => handlePost(event.target.value)}
          className="postInputBox"
          placeholder="Enter Post Here"
          value={post}
        />
        <div className="addPostButtons">
          {!edit ? (
            <button className="AddPButtons" onClick={makePost}>
              Post
            </button>
          ) : (
            <button className="AddPButtons" onClick={updatePost}>
              {" "}
              Save{" "}
            </button>
          )}
          <button
            className="AddPButtons"
            onClick={() => props.history.push("/Home")}
          >
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
}
export default Add_Post;

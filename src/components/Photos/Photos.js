import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Photos.css";

class Photos extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      album: []
    };
  }

  componentDidMount() {
    this.getData();
    this.getAlbumName();
    console.log(this.props.match)
    console.log(this.state)
  }
  async getData() {
    const photos = await axios.get(
      `/api/photos/${this.props.match.params.albumid}`
    );
    this.setState({
      photos: photos.data,
    });
  }

  async getAlbumName() {
    const album = await axios.get(
      `/api/album/${this.props.match.params.albumid}`
    );
    this.setState({
      album: album.data,
    });
  }

  deletePhoto = (id) => {
    axios.delete(`/api/deletePhoto/${id}`).then((res) => {
      this.getData();
    });
  };

  render() {
    const mappedPhotos = this.state.photos.map((element, index) => {
      return (
        <div className="pullPhotos" key="element.title">
          <div className="titleAndX">
            <div className="pSpace"/>
            <p className="albumImageTitle">{element.title}</p>
            <h5
              className="photoDeleteButton"
              onClick={() => this.deletePhoto(element.id)}
            >
              X
            </h5>
          </div>
          <div className="albumImageBox">
            <img className="albumImage" src={element.img} />
          </div>
        </div>
      );
    });
    console.log(this.state.album);
    return (
      <div className="albumPhotosComponent">
        <main className="albumPhotosInfo">
          <h6 className="photoAlbumTitlePage">{this.state.album.title}</h6>
          <div className="photoWrapper">{mappedPhotos}</div>
        </main>
      </div>
    );
  }
}

export default withRouter(Photos);

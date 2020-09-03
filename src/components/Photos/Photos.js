import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./Photos.css";

class Photos extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  async getData() {
    const photos = await axios.get(
      `/api/photos/${this.props.match.params.albumid}`
    );
    this.setState({
      photos: photos.data,
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
            <p className="albumImageTitle">{element.title}</p>
            <h5 className='photoDeleteButton' onClick={() => this.deletePhoto(element.id)} >X</h5>
          </div>
          <div className="albumImageBox">
            <img className="albumImage" src={element.img} />
          </div>
        </div>
      );
    });
    console.log(this.state.photos);
    return (
      <div className="albumPhotosComponent">
        <main className="albumPhotosInfo">{mappedPhotos}</main>
      </div>
    );
  }
}

export default withRouter(Photos);

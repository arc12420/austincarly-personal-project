import React, { Component } from "react";
import "./Add_Album.css";
import axios from "axios";

class Add_Album extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  handleTitle = (value) => {
    this.setState({title: value});
  }

  makeAlbum = () => {
    const{title} = this.state
    axios.post("/api/addAlbum", {title})
    .then((res) => {
    //   this.props.componentDidMount();
      this.props.history.push("/Home");
    })
  }

  render(props) {
    return (
      <div className="addAlbumComponent">
          <div className="titleImagePageTitle">
            <h6>Name Your Album</h6>
               <input onChange={(event) => this.handleTitle(event.target.value)} placeholder="Title" />
          </div>
          <div className="addAlbumButtons">
            <button onClick={this.makeAlbum}>
              Add
            </button>
            <button onClick={() => this.props.componentDidMount()}>
              Cancel
            </button>
          </div>
      </div>
    );
  }
}


export default Add_Album;

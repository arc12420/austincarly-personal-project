import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./Add_Photo.css";

class Add_Photo extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: ""
    };
  }

  handleAddPhotoTitle = (value) => {
    this.setState({title: value})
  }

  handleAddPhotoImg = (value) => {
    this.setState({img: value})
  }

  
  parser = (string) => {
    let newString = string.split('/')
    console.log(newString[2])
    return newString[2]
  }

            addPhotoFunc = () => {
              const{title, img} = this.state
              axios.post(`/api/addPhoto/${this.parser(this.props.location.pathname)}`, {title, img})
              .then((res) => {
                this.props.history.push(`/photos/${this.parser(this.props.location.pathname)}`);
              })
            }

            

  render(props) {
    console.log(this.state)
    return (
      <div className="addPhotoComponent">
        <main className="addPhotoBox">
          <h6 className="addPhotoBoxTitle"> Add Your Photo </h6>
          <div className="inputs">
            <input onChange={(event) => this.handleAddPhotoTitle(event.target.value)} className="addPhotoTitle" placeholder="Title" />
            <input onChange={(event) => this.handleAddPhotoImg(event.target.value)} className="addPhotoURL" placeholder="Image URL" />
          </div>
          <div className="addPhotoButtons">
            <button
              onClick={this.addPhotoFunc}
            >
              {" "}
              Save{" "}
            </button>
            <button
              onClick={() =>this.props.history.goBack}
            >
              {" "}
              Cancel{" "}
            </button>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Add_Photo);

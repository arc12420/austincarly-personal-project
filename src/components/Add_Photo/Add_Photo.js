import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./Add_Photo.css";

function Add_Photo (props){
    const [title, setTitle] = useState([])
    const [img, setImg] = useState([])


    const handleAddPhotoTitle = (value) => {
        setTitle(value);
        console.log(title)
    }
    const handleAddPhotoImg = (value) => {
        setImg(value);
    }

    const parser = (string) => {
        let newString = string.split("/");
        console.log(newString[2]);
        return newString[2];
    }
    
    const addPhotoFunc = () => {
        // const { title } = title
        // const { img } = img 
        axios
        .post(`/api/addPhoto/${parser(props.location.pathname)}`, {
            title,
            img,
          })
          .then((res) => {
            props.history.push(
              `/photos/${parser(props.location.pathname)}`
            );
          });
    }
    return (
        <div className="addPhotoComponent">
          <main className="addPhotoBox">
            <h6 className="addPhotoBoxTitle"> Add Your Photo </h6>
            <div className="inputs">
              <input
                onChange={(event) => handleAddPhotoTitle(event.target.value)}
                className="addPhotoTitle"
                className="aPI"
                placeholder="Title"
              />
              <input
                onChange={(event) => handleAddPhotoImg(event.target.value)}
                className="addPhotoURL"
                className="aPI"
                placeholder="Image URL"
              />
            </div>
            <div className="addPhotoButtons">
              <button className="aPB" onClick={addPhotoFunc}> Save </button>
              <button
                className="aPB"
                onClick={() => {
                  props.history.push(
                    `/photos/${parser(props.location.pathname)}`
                  );
                }}
              >
                {" "}
                Cancel{" "}
              </button>
            </div>
          </main>
        </div>
      );

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Add_Photo);
import React, { Component } from 'react';
import "./Add_Post.css";

class Add_Post extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            img: "",
            post: ""
        };
    }

    render() {
        return (
            <div className="addPostComponent">
                <main className="addPostBox">
                    <div className="titleImagePageTitle">
                        <div className="addPostInputs">
                            <input className="postInput" placeholder="Post Title" />
                            <input className="postInput" placeholder="Image URL" />
                        </div>
                        <h6>Create New Post</h6>
                    </div>
                    <input className="postInputBox" placeholder="Enter Post Here" />
                    <div className="addPostButtons">
                        <button onClick={() => this.props.history.push("/Home")}>Post</button>
                        <button onClick={() => this.props.history.push("/Home")}>Cancel</button>
                    </div>
                </main>
            </div>
        )
    }
}

export default Add_Post;
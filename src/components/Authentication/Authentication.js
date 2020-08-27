import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";
import "./Authentication.css";
import Logo from "../../Logo.png";
// import axios from "axios";

class Authentication extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <div className="AuthenticationComponent">
                <main>
                    <img className="logo" alt="Logo" src = "Logo"/>
                    Welcome!
                    <div className="inputsAndButtons">
                        <div className="inputs">
                            <input placeholder="Email"/>
                            <input placeholder="Password"/>
                        </div>
                        <div className="buttons">
                            <button onClick={() => this.props.history.push("/Home")}> Sign-in </button>
                            <button onClick={() => this.props.history.push("/Registration")}> Register </button>
                        </div>

                    </div>            
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Authentication);
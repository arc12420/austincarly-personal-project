import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";
import "./Registration.css";
// import axios from "axios";

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <div className="registrationComponent">
                <main className="registrationBox">
                <img className="logo" alt="Logo" src = "Logo"/>
                <h6>Registration</h6>
                    <div className="inputsAndButtons">                                               
                        <div className="registrationInputs">
                            <input placeholder="First Name"/>
                            <input placeholder="Last Name"/>
                            <input placeholder="Email"/>
                            <input placeholder="Password"/>
                        </div>
                        <div className="registrationButtons">
                            <button onClick={() => this.props.history.push("/Home")}> Sign-up </button>
                            <button onClick={() => this.props.history.push("/")}> Cancel </button>
                        </div>
                    </div> 
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Registration);
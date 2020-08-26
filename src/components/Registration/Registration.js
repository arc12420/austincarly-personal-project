import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";
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
            <div>
            Registration page
            </div>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Registration);
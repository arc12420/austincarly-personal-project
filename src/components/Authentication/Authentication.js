import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";
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
            <div>
            Authentication page
            </div>
        )
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Authentication);
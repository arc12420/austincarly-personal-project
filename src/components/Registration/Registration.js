import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";
import "./Registration.css";
import axios from "axios";

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }
  handleFirstName = (value) => {
    this.setState({firstName: value});
  }
  handleLastName = (value) => {
    this.setState({lastName: value});
  }
  handleEmail = (value) => {
    this.setState({email: value});
  }
  handlePassword = (value) => {
    this.setState({password: value});
  }

  register =() => {
    const {firstName, lastName, email, password} = this.state;
    axios.post("/api/addUser", {firstName, lastName, email, password})
    .then((res) => {
      this.props.loginUser(res.data);
      this.props.history.push("/Home");
    })
    .catch((err) => {
      console.log(err);
      alert("Registration Failed");
    });
  };

  render() {
    return (
      <div className="registrationComponent">
        <main className="registrationBox">
          <img className="logo" alt="Logo" src="Logo" />
          <h6>Registration</h6>
          <div className="inputsAndButtons">
            <div className="registrationInputs">
              <input onChange={(event) => this.handleFirstName(event.target.value)} placeholder="First Name" />
              <input onChange={(event) => this.handleLastName(event.target.value)} placeholder="Last Name" />
              <input onChange={(event) => this.handleEmail(event.target.value)} placeholder="Email" />
              <input onChange={(event) => this.handlePassword(event.target.value)} placeholder="Password" />
            </div>
            <div className="registrationButtons">
              <button onClick={this.register}>
                {" "}
                Sign-up{" "}
              </button>
              <button onClick={() => this.props.history.push("/")}>
                {" "}
                Cancel{" "}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Registration);

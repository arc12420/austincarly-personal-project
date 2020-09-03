import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";
import "./Authentication.css";
import logo from "../../Logo.png";
import axios from "axios";

class Authentication extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail = (value) => {
    this.setState({ email: value });
  };

  handlePassword = (value) => {
    this.setState({ password: value });
  };

  login = () => {
    const { email, password } = this.state;
    axios
      .post("/api/user", { email, password })
      .then((res) => {
        console.log(res.data);
        this.props.loginUser(res.data);
        this.props.history.push("/Home");
      })
      .catch((err) => {
        console.log(err);
        alert("Login Failed");
      });
  };

  render() {
    return (
      <div className="AuthenticationComponent">
        <main>
          <img src={logo} className="authenticationLogo" alt="Logo" />
          <h6 className="welcome">Welcome!</h6>
          <div className="authenticationInputsAndButtons">
            <div className="authenticationInputs">
              <input
                placeholder="Email"
                onChange={(event) => this.handleEmail(event.target.value)}
              />
              <input
                placeholder="Password"
                className="passwordInput"
                type="password"
                onChange={(event) => this.handlePassword(event.target.value)}
              />
            </div>
            <div className="authenticationButtons">
              <button onClick={this.login}> Sign-in </button>
              <button onClick={() => this.props.history.push("/Registration")}>
                {" "}
                Register{" "}
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Authentication);

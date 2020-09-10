import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducer";
import "./Authentication.css";
import logo from "../../Logo.png";
import axios from "axios";

function Authentication (props){
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    const handleEmail = (value) => {
        setEmail (value)
    }

    const handlePassword = (value) => {
        setPassword (value)
    }

    const login = () => {
        axios
          .post("/api/user", { email, password })
          .then((res) => {
            console.log(res.data);
            props.loginUser(res.data);
            props.history.push("/Home");
          })
          .catch((err) => {
            console.log(err);
            alert("Login Failed");
          });
      };
      return (
        <div className="AuthenticationComponent">
          <main className="authenticationLoginBox">
            <img src={logo} className="authenticationLogo" alt="Logo" />
            <h6 className="welcome">Welcome!</h6>
            <div className="authenticationInputsAndButtons">
              <div className="authenticationInputs">
                <input
                  placeholder="Email"
                  className="authenticationEmailInput"
                  onChange={(event) => handleEmail(event.target.value)}
                />
                <input
                  placeholder="Password"
                  className="authenticationPasswordInput"
                  type="password"
                  onChange={(event) => handlePassword(event.target.value)}
                />
              </div>
              <div className="authenticationButtons">
                <button className="authButtons" onClick={login}> Sign-in </button>
                <button className="authButtons" onClick={() => props.history.push("/Registration")}>
                  {" "}
                  Register{" "}
                </button>
              </div>
            </div>
          </main>
        </div>
      );      
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { loginUser })(Authentication);
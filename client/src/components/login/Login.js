import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submission success");

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.setState({ email: "", password: "" });
    console.log(userData);
  };

  handleSubmitGoogle = e => {
    e.preventDefault();
  };

  responseGoogle = response => {
    console.log(response);
  };

  render() {
    return (
      <div className="login">
        <h1>LOGIN</h1>
        <div className="login-page log">
          <div className="box1"></div>
          <div className="box2">
            <div className="label ">
              <span className="big">E</span>

              <span className="normal">MAIL</span>
            </div>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            <div className="label ">
              <span className="big">P</span>
              <span className="normal">ASSWORD</span>
            </div>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>

            <div className="buttons buttons1">
              {" "}
              <button className="btn-hover color-1" onClick={this.handleSubmit}>
                LOGIN
              </button>
            </div>

            <div className="or">OR</div>

            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              render={renderProps => (
                <div className="buttons">
                  {" "}
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="btn-hover color-1"
                  >
                    <i class="fab fa-google fa-lg"></i>

                    {` OOGLE LOGIN`}
                  </button>
                </div>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />

            {/* <div className="buttons">
            {" "}
            <button className="btn-hover color-1">
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </button>
          </div> */}
          </div>

          <div className="box1"></div>
        </div>
      </div>
    );
  }
}

export default Login;

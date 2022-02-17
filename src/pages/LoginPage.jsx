import { connect } from "react-redux";
import React from "react";
import { signup, logout } from "../store/user.action";
import {  log} from "../store/user.action";
import { userService } from "../services/userService.js";
import { Login } from "../cmps/Login.jsx";

class _LoginPage extends React.Component {
  state = { user: null, isSignup: false };

  componentDidMount() {
    this.setState(
      { user: this.props.user },
    );
  }

  onLogin = (credentials) =>{
    this.props.log(credentials);
  }

  onSignup = (credentials) => {
    this.props.signup(credentials);

  };

  onLogout = () => {
      console.log('logout');
    this.props.logout();

  };

  render() {
    const { isSignup } = this.state;
    return (
      <Login
        onLogin={this.onLogin}
        onSignup={this.onSignup}
        onLogout={this.onLogout}
        toggleSignup={this.toggleSignup}
        isSignup={isSignup}
        user= {this.props.user}
      />
    );
  }
}
function mapStateToProps({ userModule }) {
  return {
    user: userModule.user
  };
}
const mapDispatchToProps = {
    log,
  signup,
  logout,
  
};

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(_LoginPage);

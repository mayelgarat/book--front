import { connect } from "react-redux";
import React from "react";
import { log, signup, logout } from "../store/user.action";
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

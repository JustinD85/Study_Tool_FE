import React, { Component } from 'react';

class LoginIcon extends Component {

  render() {
    const { firstName, email } = this.props.person;

    return (
      <button className="login-profiles" onClick={() => this.props.login(email)}>
        {firstName}
      </button>
    );
  }
}

export default LoginIcon;

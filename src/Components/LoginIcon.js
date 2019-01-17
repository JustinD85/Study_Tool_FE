import React from 'react';
import { connect } from 'react-redux';

const LoginIcon = (props) => {
  const { firstName, email } = props.person;

  return (<button
    className="login-profiles"
    onClick={() => props.handleLogin(email)}>
    {firstName}
  </button>);
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (email) => dispatch({
      type: 'LOGIN_ICON',
      payload: email
    })
  }
}

export default connect(null, mapDispatchToProps)(LoginIcon);

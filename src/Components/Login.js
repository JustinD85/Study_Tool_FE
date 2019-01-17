import React from 'react';
import uuid from 'uuid/v1';
import LoginIcon from './LoginIcon';
import { connect } from 'react-redux';

const Login = ({ handleNewUser, users }) => {
  const iterableProfileIcons = users && Object.values(users);

  return (
    <article className="login-container">
      <h1 className="login-title">
        Javascript Fishing
      </h1>
      {
        iterableProfileIcons &&
        iterableProfileIcons
          .map(person => <LoginIcon
            key={uuid()}
            person={person}
          />)
      }
      <button onClick={handleNewUser}>+</button>
    </article>
  );

}
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNewUser: () => dispatch({
      type: 'NEW_USER',
    })
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);


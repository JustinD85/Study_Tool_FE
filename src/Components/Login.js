import React from 'react';
import uuid from 'uuid/v1';
import LoginIcon from './LoginIcon';

const Login = ({ handleNewUser, handleLogin, profileIcons }) => {
  const iterableProfileIcons = profileIcons && Object.values(profileIcons);

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
            login={handleLogin}
          />)
      }
      <button onClick={handleNewUser}>+</button>
    </article>
  );

}


export default Login;


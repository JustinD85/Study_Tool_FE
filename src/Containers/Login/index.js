import React from 'react';

const Login = (props) => {

  return(
      <h1>
        Login Page
        <button onClick={props.handleNewUser}>New User</button>
      </h1>
  );

}


export default Login;
 

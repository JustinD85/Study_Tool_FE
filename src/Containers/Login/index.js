import React from 'react';
import uuid from 'uuid/v1';
import Person from '../Person';

const Login = ({handleNewUser,handleLogin, profiles}) => {
  const iterableProfiles = Object.values(profiles);

  return(
      <h1>
        Login Page
        <button onClick={handleNewUser}>New User</button>
        {
          iterableProfiles
          .map(person => <Person
                           key={uuid()}
                           person={person}
                           login={handleLogin}
                         />)
        }
      </h1>
  );

}


export default Login;
 

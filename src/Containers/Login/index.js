import React from 'react';
import uuid from 'uuid/v1';

const Login = ({handleNewUser, profiles}) => {
  console.log(profiles);
  const iterableProfiles = Object.values(profiles);

  return(
      <h1>
        Login Page
        <button onClick={handleNewUser}>New User</button>
        {
          iterableProfiles
          .map(person => <button
                           key={uuid()}
                           login={person}
                         >{person.firstName}</button>)
        }
      </h1>
  );

}


export default Login;
 

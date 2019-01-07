import React, { Component } from 'react';

class Profile extends Component {


  render() {
    const { firstName, lastName, email } = this.props.person;
    console.log(this.props.person);
    return (
      <div>
        <main>
        <section>{firstName}</section>
        <section>{lastName}</section>
        <section>{email}</section>
        </main>
        
      </div>
    )
  }
}


export default Profile;
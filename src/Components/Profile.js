import React, { Component } from 'react';

class Profile extends Component{


  render() {
    return <h1>{this.props.person.firstName +`'s Profile`}</h1>
  }
}


export default Profile;
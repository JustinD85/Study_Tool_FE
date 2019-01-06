import React, {Component} from 'react';

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {...this.props.person};
  }

  render(){
    const {firstName, lastName, email} = this.state;

    return  (
      <button onClick={()=>this.props.login(email)}>
        {firstName}
      </button>
    );
  }
}

export default Person;

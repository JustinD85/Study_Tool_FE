import React, {Component} from 'react';

class CreateUser extends Component{

  constructor({createUser}){
    super();
    this.state = {
      firstName:'',
      lastName:'',
      email:''
    };
    this.createUser = createUser;
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    const {firstName, lastName, email} = this.state;
    this.createUser({
      [email]:{
        firstName,
        lastName,
        email}
    });
  }

  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState(
      {
        [name]:value
      }
    );
  }

  render(){
  return (
    <main>
      <h1>
        Create User Screen
      </h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name
          <input name="firstName" onChange={this.handleChange}/>
        </label>
        <label>
          Last Name
          <input name="lastName" onChange={this.handleChange} />
        </label>
        <label>
          Email
          <input name="email" onChange={this.handleChange} />
        </label>
        <input type="submit"/>
      </form>
    </main>);
}
}
export default CreateUser;

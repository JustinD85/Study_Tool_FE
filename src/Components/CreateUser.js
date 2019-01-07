import React, { Component } from 'react';

class CreateUser extends Component {

  constructor({ createUser, changeView }) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
    this.createUser = createUser;
    this.changeView = changeView;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var shouldGoBack = event.target.innerText === "Back";

    if (shouldGoBack) {
      this.changeView('login')
    } else {
      const { firstName, lastName, email } = this.state;
      this.createUser({
        [email]: {
          firstName,
          lastName,
          email,
          html:null,
          js:null,
          css:null,
          turing:null
        }
      });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      }
    );
  }

  render() {
    return (
      <main className="create-user-container">
        <h1>
          Create User Screen
      </h1>
        <form>
          <label>
            First Name
          <input name="firstName" onChange={this.handleChange} />
          </label>
          <label>
            Last Name
          <input name="lastName" onChange={this.handleChange} />
          </label>
          <label>
            Email
          <input name="email" onChange={this.handleChange} />
          </label>
          <button onClick={this.handleSubmit} >Back</button>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>

        </form>
      </main>);
  }
}
export default CreateUser;

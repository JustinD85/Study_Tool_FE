import React, { Component } from 'react';

class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ' '
    };
  }

  handleSubmit = (event) => {
    const { handleCreateUser, handleChangeView } = this.props;
    event.preventDefault();
    var shouldGoBack = event.target.innerText === "Back";

    if (shouldGoBack) {
      handleChangeView('login')
    } else {
      const { firstName, lastName, email } = this.state;
      handleCreateUser({
        [email]: {
          firstName,
          lastName,
          email,
          score: 0,
          html_elements: { words: [] },
          javascript: { words: [] },
          cascading_style_sheets: { words: [] },
          mod_one_vocab: { words: [] }
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

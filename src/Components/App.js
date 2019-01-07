import React, { Component } from 'react';
import '../styles/Main.scss';
import vocabulary from '../Data/js_fishing';
import Login from './Login';
import CreateUser from './CreateUser';
import MainContent from './MainContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: '',
      userStatus: 'login',
      users:{}
    };
  }

  convertObjectToMap = (obj) => {
    let map = new Map();

    for (let key of Object.keys(obj)) {
      if (obj[key] instanceof Object) {
        map.set(key, this.convertObjectToMap(obj[key]));
      } else {
        map.set(key, obj[key]);
      }
    }
    return map;
  }

  //replace with fetch call
  setStateFromSources = (users) => {
    let vocab;
    if (vocabulary) {
      vocab = this.convertObjectToMap(vocabulary);
    }

    this.setState({
      vocabulary: vocab,
      users,
      userStatus: 'login'
    });
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem('jsFishing'));
    this.setStateFromSources(users);

  }

  handleCreateUser = (newUser) => {
    const newState = { ...this.state.users, ...newUser };
    this.setState(
      {
        users: newState,
        userStatus: 'login'
      }
    );

    localStorage.setItem('jsFishing', JSON.stringify(newState));
  }

  handleNewUser = () => {
    this.setState({
      userStatus: 'createUser'
    });
  }

  handleLogin = (userId) => {
    this.setState({
      currentUser: userId,
      userStatus: 'mainContent'
    });
  }

  handleChangeView = (userStatus) => {

    this.setState({
      userStatus
    });
  }

  changeUserStatus = () => {
    const { userStatus, users, currentUser } = this.state;
    console.log(users,currentUser)
    const statusOptions =
    {
      login:
        <Login
          handleNewUser={this.handleNewUser}
          handleLogin={this.handleLogin}
          profileIcons={users}
        />,
      mainContent:
        <MainContent
          user={users[currentUser]}
          vocabulary={this.state.vocabulary}
          handleAppView={this.handleChangeView}
        />,
      createUser:
        <CreateUser
          createUser={this.handleCreateUser}
          changeView={this.handleChangeView}
        />
    }
    return statusOptions[userStatus];
  }

  render() {
    return (
      <div className="App">
        {
          this.state.vocabulary ? this.changeUserStatus() : <h1>Loading</h1>
        }
      </div>
    );
  }
}

export default App;

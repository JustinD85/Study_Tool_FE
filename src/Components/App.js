import React, { Component } from 'react';
import '../styles/Main.scss';
import { topics } from '../Data/js_fishing';
import Login from './Login';
import CreateUser from './CreateUser';
import MainContent from './MainContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: '',
      userStatus: 'login',
      users: {},
      topics
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
  setStateFromSources = () => {
    let users = JSON.parse(localStorage.getItem('jsFishing'));
    const topics = this.convertObjectToMap(this.state.topics);//importing from top of file

    //add function to each user that counts the words
    // maybe some class that gives methods to it?
    if (!users) {
      const emptyObj = JSON.stringify({});
      localStorage.setItem('jsFishing', emptyObj);
      users = {};
    }
    // console.log(this.convertObjectToMap(users))
    this.setState({
      topics,
      users
    });
  }

  saveToStorage =()=> {
    localStorage.setItem('jsFishing', JSON.stringify(this.state.users));
  }

  componentDidMount() {
    this.setStateFromSources();
  }

  handleCreateUser = (newUser) => {
    const users = { ...this.state.users, ...newUser };
    this.setState(
      {
        users,
        userStatus: 'login'
      }
    );

    localStorage.setItem('jsFishing', JSON.stringify(users));
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
    const statusOptions =
    {
      login:
        <Login
          handleNewUser={this.handleNewUser}
          handleLogin={this.handleLogin}
          users={users}
        />,
      mainContent:
        <MainContent
          user={users[currentUser]}
          topics={this.state.topics}
          handleAppView={this.handleChangeView}
          handleSaveToStorage={this.saveToStorage}
        />,
      createUser:
        <CreateUser
          handleCreateUser={this.handleCreateUser}
          handleChangeView={this.handleChangeView}
        />
    }
    return statusOptions[userStatus];
  }

  render() {
    return (
      <div className="App">
        {
          this.state.topics ? this.changeUserStatus() : <h1>Loading</h1>
        }
      </div>
    );
  }
}

export default App;

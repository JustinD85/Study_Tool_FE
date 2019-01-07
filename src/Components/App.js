import React, { Component } from 'react';
import '../styles/Main.scss';
import vocabulary from '../Data/js_fishing';
import Login from './Login';
import CreateUser from './CreateUser';
import Controller from './Controller';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      currentView: null
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
      users
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
        currentView: ''
      }
    );

    localStorage.setItem('jsFishing', JSON.stringify(newState));
  }

  handleNewUser = () => {
    this.setState({
      currentView:
        <CreateUser
          createUser={this.handleCreateUser}
          changeView={this.handleChangeView}
        />
    });
  }

  handleLogin = (userId) => {
    this.setState(
      {
        currentUser: userId,
        currentView: <Controller
          user={this.state.users[userId]}
          vocabulary={this.state.vocabulary}
          handleAppView={this.handleChangeView}
        />
      }
    );
  }

  handleChangeView = (currentView) => {
    this.setState({
      currentView
    });
  }

  renderApp = () => {
    const { currentView, users } = this.state;
    return currentView ||
      <Login
        handleNewUser={this.handleNewUser}
        handleLogin={this.handleLogin}
        profileIcons={users}
      />;
  }

  render() {

    return (
      <div className="App">
        {
          this.state.vocabulary ? this.renderApp() : <h1>Loading</h1>
        }
      </div>
    );
  }
}

export default App;

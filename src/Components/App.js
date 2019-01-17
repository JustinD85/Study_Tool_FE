import React, { Component } from 'react';
import '../styles/Main.scss';
import { topics } from '../Data/js_fishing';
import Login from './Login';
import CreateUser from './CreateUser';
import MainContent from './MainContent';
import { connect } from 'react-redux';
class App extends Component {
  // constructor() {
  // super();
  // this.state = {
  //   currentUser: '',
  //   userStatus: 'login',
  //   users: {},
  //   topics
  // };
  // }

  // convertObjectToMap = (obj) => {
  //   let map = new Map();
  //   for (let key of Object.keys(obj)) {
  //     if (obj[key] instanceof Object) {
  //       map.set(key, this.convertObjectToMap(obj[key]));
  //     } else {
  //       map.set(key, obj[key]);
  //     }
  //   }
  //   return map;
  // }

  //replace with fetch call
  // setStateFromSources = () => {
  //   let users = JSON.parse(localStorage.getItem('jsFishing'));
  //   const topics = this.convertObjectToMap(this.props.topics);//importing from top of file

  //   //add function to each user that counts the words
  //   // maybe some class that gives methods to it?
  //   if (!users) {
  //     const emptyObj = JSON.stringify({});
  //     localStorage.setItem('jsFishing', emptyObj);
  //     users = {};
  //   }

  //   this.setState({
  //     topics,
  //     users
  //   });
  // }

  saveToStorage = () => {
    localStorage.setItem('jsFishing', JSON.stringify(this.props.users));
  }

  loadFromDataSources = () => {

  }

  // handleCreateUser = (newUser) => {
  //   const users = { ...this.props.users, ...newUser };
  //   this.setState(
  //     {
  //       users,
  //       userStatus: 'login'
  //     }
  //   );

  //   localStorage.setItem('jsFishing', JSON.stringify(users));
  // }

  // handleNewUser = () => {
  //   this.setState({
  //     userStatus: 'createUser'
  //   });
  // }

  // handleLogin = (userId) => {
  //   this.setState({
  //     currentUser: userId,
  //     userStatus: 'mainContent'
  //   });
  // }

  // handleChangeView = (userStatus) => {

  //   this.setState({
  //     userStatus
  //   });
  // }

  changeUserStatus = () => {
    const { userStatus, users, currentUser } = this.props;
    const statusOptions =
    {
      login:
        <Login />,
      mainContent:
        <MainContent
          user={users[currentUser]}
          topics={this.props.topics}
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

  componentDidMount() {
    let users = JSON.parse(localStorage.getItem('jsFishing'));
    if (!users) {
      const emptyObj = JSON.stringify({});
      localStorage.setItem('jsFishing', emptyObj);
      users = {};
    }
    //need to do axios request for topics still
    this.props.setStateFromSources(topics, users);
  }

  render() {
    return (
      <div className="App">
        {
          this.props.topics ? this.changeUserStatus() : <h1 className="loading">Loading</h1>
        }
      </div>
    );
  }
}
// currentUser: '',
// userStatus: 'login',
// users: {},
// topics
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    userStatus: state.userStatus,
    users: state.users,
    topics: state.topics
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStateFromSources: (topics, users) => dispatch({
      type: 'LOAD_DATA',
      payload: { topics, users }
    }),
    // handleNewUser: () => dispatch({
    //   type: 'NEW_USER'
    // })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
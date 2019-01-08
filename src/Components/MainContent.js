import React, { Component } from 'react';
import Game from './Game';
import Train from './Train';
import Profile from './Profile';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'profile',
    }
  }

  handleControllerView = (status) => {

    this.setState({
      status
    });
  }

  userStatus = () => {
    const { status } = this.state;
    const { topics, user } = this.props;
    const userStatus = {
      game: <Game info={{ ...this.props }} />,
      train: <Train topics={topics} info={{ ...this.props }} />,
      profile: <Profile person={user} info={{ ...this.props }} />
    }

    return userStatus[status];
  }

  render() {
    const { user, handleAppView } = this.props;
    const { handleControllerView } = this;

    return (
      <div className="MainContent">
        <nav className="controller-menu">
          <h1>Js Fishing</h1>
          <ul>
            <li onClick={() => handleControllerView('profile')}>
              {user.firstName + '\'s Profile'}
            </li>
            <li onClick={() => handleControllerView('train')}>
              Train
              </li>
            <li onClick={() => handleControllerView('game')}>
              Play
              </li>
          </ul>
          <button onClick={() => handleAppView('login')}>Back</button>
        </nav>
        {this.userStatus()}
      </div>
    );
  }
}

export default MainContent;

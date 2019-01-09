import React, { Component } from 'react';
import Game from './Game';
import Training from './Training';
import Menu from './Menu';
import Profile from './Profile';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'profile',
    }
  }

  handleContentView = (status) => {

    this.setState({
      status
    });
  }

  userStatus = () => {
    const { status } = this.state;
    const userStatus = {
      game: <Game info={{ ...this.props }} />,
      train: <Training info={{ ...this.props }} />,
      profile: <Profile info={{ ...this.props }} />
    }

    return userStatus[status];
  }

  render() {
    const { user, handleAppView } = this.props;
    const { handleContentView } = this;

    return (
      <div className="MainContent">
        <Menu
          handleContentView={handleContentView}
          handleAppView={handleAppView}
          user={user}
          currentView={this.state.status}
        />
        {this.userStatus()}
      </div>
    );
  }
}

export default MainContent;

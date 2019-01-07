import React, { Component } from 'react';

class Game extends Component {

  render() {
    const { user, vocabulary } = this.props.info;
    return <h1>{user.firstName}'s Game</h1>
  }
}

export default Game;
import React, { Component } from 'react';

class Menu extends Component {

  checkClassName(elementName) {
    const { currentView } = this.props;
    return currentView === elementName ? 'active-view': undefined;
  }

  render() {
    const { handleContentView, handleAppView, user } = this.props;

 
    return (
      <nav className="Menu">
        <h1>Js Fishing</h1>
        <ul>
          <li
            onClick={(e) => handleContentView('profile', e)}
            className={this.checkClassName('profile')}
          >
            {user.firstName + '\'s Profile'}
          </li>
          <li
            onClick={(e) => handleContentView('train', e)}
            className={this.checkClassName('train')}
          >
            Train
        </li>
          <li onClick={(e) => handleContentView('game', e)}
          className={this.checkClassName('game')}
          >
            Play
        </li>
        </ul>
        <button onClick={(e) => handleAppView('login',e)}>Back</button>
      </nav>
    )
  }
}

export default Menu;
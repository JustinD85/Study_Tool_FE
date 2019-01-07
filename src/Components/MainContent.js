import React, { Component } from 'react';
import Game from './Game';
import Train from './Train';
import Profile from './Profile';

class MainContent extends Component {
  constructor(props) {
    super(props);
    const { user, vocabulary } = this.props;
    this.state = {
      user,
      viewId: 'profile',
      views: {
        game: <Game info={{ ...this.props }}/>,
        train: <Train vocabulary={vocabulary} />,
        profile: <Profile person={user} />
      }
    }
  }

  handleControllerView = (viewId) => {
    this.setState({
      viewId
    });
  }

  render() {
    const { views, viewId, user } = this.state;
    const { handleAppView } = this.props;
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
        {views[viewId]}
        {/*console.log(Object.entries(vocabuary).map())*/}
        {/*Object.keys(vocabulary).map(category=>{
          return <li>category</li>;
        })*/}

      </div>

    );
  }
}

export default MainContent;

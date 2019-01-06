import React, { Component } from 'react';
import './App.css';
import vocabulary from '../../Data/js_fishing';
import Login from '../../Components/Login';
import CreateUser from '../../Components/CreateUser';

class App extends Component {

  //replace with fetch call
  setVocabulary(){
    this.setState({vocabulary});
  }


  componentDidMount(){
    this.setVocabulary();
  }

  handleCreateUser = (newUser) => {
    this.setState(
      {
        users:{...newUser}
      }
    );

    localStorage.setItem('jsFishing', JSON.stringify(this.state));
  }

  handleNewUser = () => {
    this.setState({
      currentView:
      <CreateUser
        createUser={this.handleCreateUser}
      />});
  }

  renderApp = () =>{
    return this.state.currentView || <Login handleNewUser={this.handleNewUser}/>;
  }

  render() {
 
    return (
      <div className="App">
        {
          this.state ? this.renderApp() : <h1>Loading</h1>
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import vocabulary from '../../Data/js_fishing';
import Login from '../../Containers/Login';
import CreateUser from '../../Components/CreateUser';

class App extends Component {

  //replace with fetch call
  setStateFromSources(users){
    this.setState({vocabulary,users});
  }


  componentDidMount(){
    const users = JSON.parse(localStorage.getItem('jsFishing'));
    this.setStateFromSources(users);
  }

  handleCreateUser = (newUser) => {
    const newState = {...this.state.users,...newUser};
    this.setState(
      {
        users:newState,
        currentView:null
      }
    );

    localStorage.setItem('jsFishing', JSON.stringify(newState));
  }

  handleNewUser = () => {
    this.setState({
      currentView:
      <CreateUser
        createUser={this.handleCreateUser}
      />});
  }

  renderApp = () =>{
    const{currentView, users} = this.state;
    return currentView ||
      <Login
        handleNewUser={this.handleNewUser}
        profiles={{...users}}
      />;
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

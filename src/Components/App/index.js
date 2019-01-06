import React, { Component } from 'react';
import './App.css';
import vocabulary from '../../Data/js_fishing';
import Login from '../Login';

class App extends Component {

  //replace with fetch call
  setVocabulary(){
    this.setState({vocabulary});
  }


  componentDidMount(){
    this.setVocabulary();
  }

  render() {
 
    return (
      <div className="App">
        {
          this.state ? <Login /> : <h1>Loading</h1>
        }
      </div>
    );
  }
}

export default App;

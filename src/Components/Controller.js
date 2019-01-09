import React, { Component } from 'react';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {
        top: 50,
        left: 50
      }
    }

  }

  check = () => {
    const { intervalHasStarted } = this.state;

    if (!intervalHasStarted) {
     const stopInterval= setInterval(() => {
        console.log('every second every minute')
     }, 1000)
      this.setState({
        intervalHasStarted:true
      })
    }
  }

  render() {
    this.check();
    const { styles } = this.state;

    return (
      <span
        className="Controller"
        style={styles}
      > RAWR</span>
    )
  }
}

export default Controller;
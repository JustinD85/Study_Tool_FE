import React, { Component } from 'react';

class Fish extends Component {


  render() {
    const { word, index, setUserScore } = this.props;
    return (
      <span className="Fish" data-id={word}>
        <p className="fish-word">{word}</p>
        <img
          src={`./fish${index}.svg`}
          className="fish-svg"
          onClick={setUserScore}
        />
      </span>
    )
  }
}

export default Fish;
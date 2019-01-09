import React, { Component } from 'react';
import uuid from 'uuid';

class VocabList extends Component {

  changeToJSX(word) {
    const { handleSelectWord, currentWord } = this.props;
    return (<li
      onClick={(e) => handleSelectWord(e.target.innerText)}
      key={uuid()}
      className={currentWord === word ? 'selected-word' : undefined}
    >
      {word}
    </li>)
  }

  returnVocabAsLi = () => {
    const { currentTopic, topics, user } = this.props;
    let currentVocab = [];

    topics.get(currentTopic).forEach((section) => {
      section.get('vocabulary').forEach((definition, word) => {
        if (!user[currentTopic].words.includes(word)) currentVocab.push(word);
      });
    });

    return currentVocab.sort().map(word => this.changeToJSX(word));
  }

  render() {

    return (
      <div className="vocab-container">
        <h2>Word List</h2>
        <ul className="vocab-list">
          {this.returnVocabAsLi()}
        </ul>
      </div>
    )
  }
}

export default VocabList;
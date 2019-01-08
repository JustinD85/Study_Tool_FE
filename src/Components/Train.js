import React, { Component } from 'react';
import Filter from './Filter';
import uuid from 'uuid';

class Train extends Component {
  constructor() {
    super();
    this.state = {
      currentTopic: 'javascript',
      currentWord: 'null',
      currentDefinition: null
    }
  }

  handleSwitchFilter = (event) => {
    let currentTopic = event.target.innerText;
    currentTopic = this.toLowerCase(currentTopic)

    this.setState({ currentTopic })
  }

  toLowerCase(text) {
    return (
      text.replace(text[0], text[0].toLowerCase())
        .split(' ').join('_').trim()
    )
  }

  handleSelectWord = (currentWord = this.state.currentWord) => {
    let { currentDefinition, currentTopic } = this.state;
    const { topics } = this.props;

    topics.get(currentTopic).forEach((section) => {
      let didFindKey = section.get('vocabulary').has(currentWord);
      let currentDefinition = section.get('vocabulary').get(currentWord);

      if (didFindKey) {
        let isCSSVocab = typeof currentDefinition === 'object';
        if (isCSSVocab) {
          currentDefinition = currentDefinition.get('description');
        }
        this.setState({ currentDefinition, currentWord });
      }
    });
  }

  returnVocabList = (currentTopic, currentWord) => {
    let values = [];
    const { topics } = this.props;

    topics.get(currentTopic).forEach((section) => {
      section.get('vocabulary').forEach((definition, word) => {
        values.push(word);
      });
      values.sort();
    });

    return values.map(value => (
      <li
        onClick={(e) => this.handleSelectWord(e.target.innerText)}
        key={uuid()}
        className={currentWord === value ? 'selected-word' : undefined}
      >
        {value}
      </li>));
  }

  componentDidMount() {
    this.handleSelectWord()
  }

  render() {
    const { currentTopic, currentWord } = this.state;
    const { topics } = this.props;

    return <article className="Train">
      <h1>Train</h1>
      <section className="vocab-list">
        <ul>
          {this.returnVocabList(currentTopic, currentWord)}
        </ul>
      </section>

      <details className="train-definition">
        <summary>Show/Hide Answer</summary>
        {this.state.currentDefinition && <h1>{this.state.currentDefinition} </h1>}
      </details>
      <Filter
        topics={topics}
        click={this.handleSwitchFilter}
      />
    </article>
  }
}

export default Train;
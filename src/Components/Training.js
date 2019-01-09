import React, { Component } from 'react';
import Topics from './Topics';
import ToggleDefinition from './ToggleDefinition';
import VocabList from './VocabList';

class Training extends Component {
  constructor() {
    super();
    this.state = {
      currentTopic: 'javascript',
      currentWord: null,
      currentDefinition: null
    }
  }

  handleSwitchTopic = (event) => {
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

  handleSelectWord = (currentWord) => {
    let { currentTopic } = this.state;
    const { topics } = this.props.info;

    topics.get(currentTopic).forEach((section) => {
      let didFindWord = section.get('vocabulary').has(currentWord);

      if (didFindWord) {
        let currentDefinition = section.get('vocabulary').get(currentWord);
        const isCSSVocab = typeof currentDefinition === 'object';

        if (isCSSVocab) {
          currentDefinition = currentDefinition.get('description');
        }

        this.setState({ currentDefinition, currentWord });
      }
    });
  }

  render() {
    const { currentTopic, currentWord, currentDefinition } = this.state;
    const { topics, user } = this.props.info;
    return <article className="Training">
      <h1 className="training-title">Training</h1>
      <VocabList
        handleSelectWord={this.handleSelectWord}
        currentTopic={currentTopic}
        currentWord={currentWord}
        topics={topics}
        user={user}
      />

      <ToggleDefinition
        currentDefinition={currentDefinition}
        currentWord={currentWord}
      />
      <Topics
        topics={topics}
        click={this.handleSwitchTopic}
      />

    </article>
  }
}

export default Training;
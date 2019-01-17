import React, { Component } from 'react';
import Fish from './Fish';
import uuid from 'uuid'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      wordWorth: 100,
      possibleWords: [],
      possibleDefinitions: [],
      fishWords: [],
      currentDefinition: null,
      currentWord: null,
      currentTopic: null
    }
  }

  randNumGen(num) {
    return Math.floor(Math.random() * num);
  }

  selectTopic = () => {
    const { topics, user } = this.props.info;
    let allTopics = [...topics.keys()];
    let index = Math.floor(Math.random() * allTopics.length);
    let currentTopic = allTopics[index];
    let { possibleDefinitions, possibleWords } = this.state;

    topics.get(currentTopic).forEach((section) => {
      section.get('vocabulary').forEach((definition, word) => {
        if (!user[currentTopic].words.includes(word)) {
          possibleWords.push(word);
          const isCSSVocab = typeof definition === 'object';
          if (isCSSVocab) {
            definition = definition.get('description');
          }
          possibleDefinitions.push(definition)
        };
      });
    });

    this.setState({
      currentTopic, possibleDefinitions, possibleWords
    }, this.setFishWords);
  }

  setFishWords() {
    let { possibleDefinitions, possibleWords } = this.state;
    let index = this.randNumGen(possibleWords.length);
    let currentWord = possibleWords.splice(index, 1).toString();
    let currentDefinition = possibleDefinitions.splice(index, 1).toString();
    let fishWords = [];
    //sets fish words
    for (let i = 0; i < 3; i++) {
      index = this.randNumGen(possibleWords.length);
      fishWords.push(...possibleWords.splice(index, 1));
      possibleDefinitions.splice(index, 1);
    };

    fishWords.push(currentWord);

    //randomizer
    for (let i = 0; i < 8; i++) {
      fishWords.unshift(...fishWords.splice(this.randNumGen(fishWords.length), 1));
    }

    this.setState({
      currentWord,
      currentDefinition,
      fishWords
    });
  }

  decrementPoints = () => {
    const wordWorth = this.state.wordWorth - 1;
    if (wordWorth < 1) {
      this.setUserScore();
    } else {
      this.setState({ wordWorth });
    }
  }

  componentDidMount() {
    this.selectTopic();
    const intervalId = setInterval(this.decrementPoints, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  setUserScore = (e) => {
    let { currentWord, currentTopic, wordWorth } = this.state;
    let { user, handleSaveToStorage } = this.props.info;
    let userWords = user[currentTopic].words;
    let selWord = e ? e.target.closest('.Fish').dataset.id : '';

    if (selWord === currentWord) {
      user.score += wordWorth;
      userWords.push(currentWord);
    } else {
      if (userWords.includes(currentWord)) {
        userWords.splice(userWords.findIndex(currentWord), 1);
      }
    }

    this.selectTopic();
    handleSaveToStorage();
    clearInterval(this.state.intervalId);
    const intervalId = setInterval(this.decrementPoints, 1000);
    this.setState({ intervalId, wordWorth:100 })
  }


  render() {
    const { score } = this.props.info.user;
    const { wordWorth, currentDefinition, fishWords } = this.state;
    return (
      <div className="Game">
        <div className="game-sky">
          <span className="game-definition game-status"> {currentDefinition}</span>
          <span className="game-definition-score game-status">pointValue:{wordWorth}</span>
          <span className="game-user-score game-status">Score:{score}</span>
        </div>
        <div className="game-ocean">
          {fishWords.map((word, i) => <Fish key={uuid()}
            word={word} index={i}
            top={'170px'}
            setUserScore={this.setUserScore}

          />)}
        </div>
      </div>
    );
  }
}

export default Game;
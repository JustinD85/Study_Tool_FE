import React, { Component } from 'react';
import Fish from './Fish';

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
      currentWord: null
    }
  }

  randNumGen(num) {
    return Math.floor(Math.random() * num);
  }

  showRandomDefinition = () => {
    const { topics, user } = this.props.info;
    let allTopics = [...topics.keys()];
    let index = Math.floor(Math.random() * allTopics.length);
    let currentTopic = allTopics[index];
    let { possibleDefinitions, possibleWords } = this.state;

    topics.get(currentTopic).forEach((section) => {
      section.get('vocabulary').forEach((definition, word) => {
        if (!user[currentTopic].words.includes(word)) {
          possibleWords.push(word);
          possibleDefinitions.push(definition);
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
    const wordWorth = this.state.wordWorth - 4;
    this.setState({ wordWorth });
  }

  componentDidMount() {
    this.showRandomDefinition();
    const intervalId = setInterval(this.decrementPoints, 1000);
    this.setState({ intervalId })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  setUserScore = (e) => {
    let { currentWord, currentTopic, wordWorth } = this.state;
    let { user, handleSaveToStorage } = this.props.info;
    let userWords = user[currentTopic].words;
    let selWord = e.target.closest('.Fish').dataset.id;

    if (selWord === currentWord) {
      user.score += wordWorth;
      userWords.push(currentWord);
    } else {
      if (userWords.includes(currentWord)) {
        userWords.splice(userWords.findIndex(currentWord), 1);
      }
    }

    this.showRandomDefinition();
    handleSaveToStorage();
    clearInterval(this.state.intervalId);
    this.state.wordWorth = 100;
    const intervalId = setInterval(this.decrementPoints, 1000);
    this.setState({ intervalId })
  }


  render() {
    const { score } = this.props.info.user;
    const { wordWorth, currentDefinition, currentWord, fishWords } = this.state;
    return (
      <div className="Game">
        <div className="game-sky">
          <span className="game-definition game-status"> {currentDefinition}</span>
          <span className="game-definition-score game-status">pointValue:{wordWorth}</span>
          <span className="game-user-score game-status">Score:{score}</span>
        </div>
        <div className="game-ocean">
          {fishWords.map((word, i) => <Fish word={word} index={i} setUserScore={this.setUserScore} />)}
        </div>
      </div>
    );
  }
}

export default Game;
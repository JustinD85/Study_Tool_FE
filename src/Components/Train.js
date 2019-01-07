import React, { Component } from 'react';

class Train extends Component {
  constructor() {
    super();
    this.state = {
      currentWord: null,
      currentDefinition: null
    }
  }

  handleSelectWord = (selectedKey, next) => {
    const vocabulary = next || this.props.vocabulary;

    vocabulary.forEach((value) => {
      if (value instanceof Map && value.has(selectedKey)) {
        this.setState({
          currentDefinition: value.get(selectedKey)
        });
      } else if (value instanceof Map) {
        this.handleSelectWord(selectedKey, value);
      }
    });
  }

  showFilteredVocab = (filterKey) => {
    let values = [];
    const { vocabulary } = this.props;

    vocabulary.get(filterKey).forEach((value, key) => {
      value.get('vocabulary').forEach((value, key) => {
        values.push(<li onClick={(e) => this.handleSelectWord(e.target.innerText)}>{key}</li>)
      });
    });

    return values;
  }

  render() {
    return <article className="Train">
      <h1>Train</h1>
      <section className="vocab-list">
        <ul>
          {this.showFilteredVocab('javascript')}
        </ul>
      </section>
      <section>
        Show/Hide Answer
      {this.state.currentDefinition && <h1>{this.state.currentDefinition} </h1>}
      </section>
      <section>Filter Options</section>
    </article>
  }
}

export default Train;
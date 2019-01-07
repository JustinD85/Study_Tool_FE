import React, { Component } from 'react';

class Train extends Component {

  showFilteredVocab(key) {
    let values = [];
    const { vocabulary } = this.props;

    for (let subjectKey in vocabulary[key]) {
      Object.keys(vocabulary[key][subjectKey].vocabulary)
        .forEach(word => values.push(<li>{word}</li>))
    }

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
      <section>Show/Hide Answer</section>
      <section>Filter Options</section>
    </article>
  }
}

export default Train;
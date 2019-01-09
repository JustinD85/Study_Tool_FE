import React, { Component } from 'react';
import uuid from 'uuid';
class Topics extends Component {

  toUpperCase(text) {
    return (
      text.replace(text[0], text[0].toUpperCase())
        .split('_').join(' ').trim()
    )
  }

  render() {
    const topics = [...this.props.topics.keys()];
    const { click } = this.props;

    return (
      <section className="Filter">
        <h1>Filter</h1>
        <ul>
          {topics.map((word) => {

            return <li
              onClick={click}
              key={uuid()}>{this.toUpperCase(word)}
            </li>;
          })}
        </ul>
      </section>);
  }
}

export default Topics;
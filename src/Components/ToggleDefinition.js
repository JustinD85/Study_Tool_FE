import React, { Component } from 'react';

class ToggleDefinition extends Component {

  render() {
    const hasSelectedWord = this.props.currentDefinition;
    return (
      <section className="ToggleDefinition">
        {hasSelectedWord &&
          <section className="word">
          <h3 >Current Word:</h3>
          <p> {this.props.currentWord}</p>
          </section>}
        <section className="definition">
          {hasSelectedWord && <p>{this.props.currentDefinition} </p>}

          {!hasSelectedWord &&
            <p className="definition-info">
            Select Words from the Word List to see it's definition.
              <br />
              Use the Filter to change the Word List Topic.
            </p>}
        </section>
      </section>
    )
  }
}


export default ToggleDefinition;
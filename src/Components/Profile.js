import React, { Component } from 'react';

class Profile extends Component {

  countVocab() {
    const { topics } = this.props.info;
    const topicCounts = {};

    for (let topic of topics.keys()) {
      let len = 0;
      topics.get(topic).forEach((section) => {
        len += section.get('vocabulary').size;
        topicCounts[topic] = len;
      });
    }
    return topicCounts;
  }

  render() {
    const { firstName, lastName, email } = this.props.person;
    const { person } = this.props;
    const {
      javascript: jsCount,
      cascading_style_sheets: cssCount,
      mod_one_vocab: turingCount,
      html_elements: htmlCount
    } = this.countVocab();

    return (
      <div>
        <main>
          <section>{firstName}</section>
          <section>{lastName}</section>
          <section>{email}</section>
          <section>
            <h1>Javascript</h1>
            <p>
              You have mastered: {person.javascript.count.length} out of {jsCount} words.
            </p>
          </section>
          <section>
            <h1>CSS</h1>
            <p>
              You have mastered: {person.cascading_style_sheets.count.length} out of {cssCount} words.
            </p>
          </section>
          <section>
            <h1>HTML</h1>
            <p>
              You have mastered: {person.html_elements.count.length} out of {htmlCount} words.
            </p>
          </section>
          <section>
            <h1>Turing</h1>
            <p>
              You have mastered: {person.mod_one_vocab.count.length} out of {turingCount} words.
            </p>
          </section>

        </main>

      </div >
    )
  }
}


export default Profile;
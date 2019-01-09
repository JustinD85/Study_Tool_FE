import React, { Component } from 'react';

class Profile extends Component {

  countVocab = () => {
    const { topics } = this.props.info;
    const topicCounts = {};

    for (let topic of topics.keys()) {
      let len = 0;
      topics.get(topic).forEach((section) => {
        len += section.get('vocabulary').size;
        topicCounts[topic] = len;
      });
    }

    //Change to readable format
    const {
      javascript: jsTotalCount,
      cascading_style_sheets: cssTotalCount,
      mod_one_vocab: turingTotalCount,
      html_elements: htmlTotalCount
    } = topicCounts;

    return { jsTotalCount, cssTotalCount, turingTotalCount, htmlTotalCount };
  }

  countWords = () => {
    const { javascript, html_elements,
      cascading_style_sheets, mod_one_vocab } = this.props.info.user;

    return {
      jsCorrectCount: javascript.words.length,
      cssCorrectCount: cascading_style_sheets.words.length,
      turingCorrectCount: mod_one_vocab.words.length,
      htmlCorrectCount: html_elements.words.length
    };
  }

  render() {
    const { user } = this.props.info;
    const { firstName, lastName, email } = user;
    const { countVocab, countWords } = this;

    return (
      <main className="Profile">
        <div className="profile-user-info animate-info">
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{email}</p>
        </div>

        <section className="profile-javascript animate-info">
          <h1>Javascript</h1>
          <progress
            value={countWords().jsCorrectCount}
            max={countVocab().jsTotalCount}
          ></progress>
          <p>
            {`You have mastered: ${countWords().jsCorrectCount} 
                out of  ${countVocab().jsTotalCount}  words.`}
          </p>
        </section>
        <section className="profile-mastery">
          Vocabulary Mastery!
          </section>
        <section className="profile-css animate-info">
          <h1>CSS</h1>
          <progress
            value={countWords().cssCorrectCount}
            max={countVocab().cssTotalCount}
          ></progress>
          <p>
            {`You have mastered: ${countWords().cssCorrectCount}
               out of ${countVocab().cssTotalCount} words.`}
          </p>
        </section>
        <section className="profile-html animate-info">
          <h1>HTML</h1>
          <progress
            value={countWords().htmlCorrectCount}
            max={countVocab().htmlTotalCount}
          ></progress>
          <p>
            {`You have mastered: ${countWords().htmlCorrectCount}
               out of ${countVocab().htmlTotalCount} words.`}
          </p>
        </section>
        <section className="profile-turing animate-info">
          <h1>Turing</h1>
          <progress
            value={countWords().turingCorrectCount}
            max={countVocab().turingTotalCount}
          ></progress>
          <p>
            {`You have mastered: ${countWords().turingCorrectCount}
               out of ${countVocab().turingTotalCount} words.`}
          </p>
        </section>
      </main>
    )
  }
}


export default Profile;
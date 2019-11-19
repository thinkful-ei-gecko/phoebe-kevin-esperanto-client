//Use to store language and words in the response from the API request

import React, { Component } from 'react';

const LanguageContext = React.createContext({});

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: '',
    words: [],
  };

  setLanguageAndWords = (language, words) => {
    this.setState({
      language,
      words,
    });
  };

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      totalScore: this.state.totalScore,
      setLanguageAndWords: this.setLanguageAndWords,
    };

    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

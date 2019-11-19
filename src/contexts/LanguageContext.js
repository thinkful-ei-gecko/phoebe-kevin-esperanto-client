//Use to store language and words in the response from the API request

import React, { Component } from 'react';

const LanguageContext = React.createContext({});

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: '',
    words: [],
    nextWord: '',
    totalScore: 0, 
    wordCorrectCount: 0, 
    wordIncorrectCount: 0,
  };

  setLanguageAndWords = (language, words) => {
    this.setState({
      language,
      words,
    });
  };

  setNewWord = (nextWord, totalScore, wordCorrectCount, wordIncorrectCount) => {
    this.setState({
      nextWord, 
      totalScore, 
      wordCorrectCount, 
      wordIncorrectCount
    })
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      totalScore: this.state.totalScore,
      setLanguageAndWords: this.setLanguageAndWords,
      nextWord: this.state.nextWord,
      wordCorrectCount: this.state.wordCorrectCount,
      wordIncorrectCount: this.state.wordIncorrectCount,
      setNewWord: this.setNewWord
    };

    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

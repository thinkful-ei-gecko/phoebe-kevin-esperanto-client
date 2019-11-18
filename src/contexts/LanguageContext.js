//Use to store language and words in the response from the API request

import React, { Component } from 'react'
import languageApiService from '../services/language-api-service'

const LanguageContext = React.createContext({
  language: '',
  words: [], 
})

export default LanguageContext

export class LanguageProvider extends Component {

  state = {
    language: '',
    words: [],
  }

  componentDidMount() {
    languageApiService.getLanguageAndWords()
      .then(res => {
        const { language, words } = res;
        this.setState({
          language,
          words
        })
      })
  }

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      totalScore: this.state.totalScore,
    }

    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
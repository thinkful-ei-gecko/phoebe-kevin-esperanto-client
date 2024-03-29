import React, { Component } from 'react'
import Learning from '../../components/Learning/Learning'
import LanguageContext from '../../contexts/LanguageContext';
import languageApiService from '../../services/language-api-service'


class LearningRoute extends Component {
  static contextType = LanguageContext

  componentDidMount = () => {
    languageApiService.getFirstWord()
      .then(res => {
        //destructure word object and set its values to the variables in context 
        const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount } = res;
        this.context.setNewWord(nextWord, totalScore, wordCorrectCount, wordIncorrectCount);
      });
  }

  render() {
    const { nextWord } = this.context;
    if (!nextWord) {
      return null;
    } else {
      return (
        <section>
          <Learning />
        </section>
      );
    }
  }
}

export default LearningRoute

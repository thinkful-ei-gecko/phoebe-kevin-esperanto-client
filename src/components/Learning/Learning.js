import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import LanguageContext from '../../contexts/LanguageContext'
import Button from '../../components/Button/Button'

export default class Learning extends Component {
  static contextType = LanguageContext



  render () {
    const { nextWord, totalScore, wordCorrectCount, wordIncorrectCount } = this.context;
    console.log(nextWord, totalScore, wordCorrectCount, wordIncorrectCount)
    return (
      <>
        <h2>Translate the word:</h2><span>{nextWord}</span>
        <p>Your total score is: {totalScore}</p>
        <form>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <input id='learn-guess-input' type='text' required></input>
          <Button type='submit'>Submit your answer</Button>
          <p>You have answered this word correctly {wordCorrectCount} times.</p>
          <p>You have answered this word incorrectly {wordIncorrectCount} times.</p>
        </form>
      </>
    )
  }
}
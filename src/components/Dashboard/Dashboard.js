import React, { Component } from 'react';
import Button from '../Button/Button';
import languageContext from '../../contexts/LanguageContext';
// import { Link } from "react-router-dom";
import './Dashboard.css';

export default class Dashboard extends Component {
  static contextType = languageContext;

  render() {
    const { language, words } = this.context;

    return (
      <>
        <h3>Words to Practice</h3>
        <ul>
          {words.map((word) => {
            return (
              <li key={word.id}>
                <span className="bold">{word.original}</span>
                <ul>
                  <li>correct answer count: {word.correct_count}</li>
                  <li>incorrect answer count: {word.incorrect_count}</li>
                </ul>
              </li>
            );
          })}
        </ul>
        <h3>Total correct answers: {language.total_score}</h3>
        <a href="/learn">
          <Button>Start practicing!</Button>
        </a>
      </>
    );
  }
}

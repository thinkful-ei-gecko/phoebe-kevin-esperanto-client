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
        <h3>Words to practice</h3>
        <ul>
				{words.map((word, index) => {
            return (
              <li key={index}>
                <h4>{word.original}</h4>
								<p>correct answer count: {word.correct_count}</p>
								<p>incorrect answer count: {word.incorrect_count}</p>
              </li>
            );
          })}
        </ul>
        <h5>Total correct answers: {language.total_score}</h5>
        <a href="/learn">
          <Button>Start practicing</Button>
        </a>
      </>
    );
  }
}

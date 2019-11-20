import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import languageApiService from "../../services/language-api-service";
import LanguageContext from "../../contexts/LanguageContext";
import DisplayScore from "./DisplayScore";
import DisplayFeedback from "./DisplayFeedback";
import Button from "../../components/Button/Button";

export default class Learning extends Component {
	static contextType = LanguageContext;

	state = {
		totalScore: 0,
		isCorrect: false,
		submitted: false,
		guess: "",
		answer: "",
		nextWordInfo: ""
	};

	handleSubmit = e => {
		e.preventDefault();
		languageApiService.postGuess(this.state.guess).then(res => {
			const {
				nextWord,
				totalScore,
				wordCorrectCount,
				wordIncorrectCount,
				answer,
				isCorrect
			} = res;
			console.log(res);

			//Saved returned values to state so that they can be passed into context on click "next"
			const nextWordInfo = {
				nextWord,
				totalScore,
				wordCorrectCount,
				wordIncorrectCount
			};

			this.setState({
				totalScore,
				isCorrect,
				submitted: true,
				answer,
				nextWordInfo
			});
		});
	};

	handleNextWord = () => {
		this.resetState();
		const {
			nextWord,
			totalScore,
			wordCorrectCount,
			wordIncorrectCount
		} = this.state.nextWordInfo;
		this.context.setNewWord(
			nextWord,
			totalScore,
			wordCorrectCount,
			wordIncorrectCount
		);
	};

	resetState = () => {
		this.setState({
			totalScore: 0,
			isCorrect: "",
			submitted: false,
			guess: "",
			answer: "",
			nextWordInfo: ""
		});
	};

	componentDidMount = () => {
		//Set totalScore values in state so it can be updated by what's returned from the POST
		this.setState({ totalScore: this.context.totalScore });
	};

	render = () => {
		const { nextWord, wordCorrectCount, wordIncorrectCount } = this.context;
		console.log(this.state);
		return (
			<>      
				{(!this.state.submit) ? (
				<>
					<h2>Translate the word:</h2>
					<span>{nextWord}</span>
				</>
				) : (
          <DisplayFeedback
					isCorrect={this.state.isCorrect}
					nextWord={nextWord}
					answer={this.state.answer}
					guess={this.state.guess}
					submitted={this.state.submitted}
        />)}
        
				
				<DisplayScore
					totalScore={this.state.totalScore}
					wordCorrectCount={this.state.wordCorrectCount}
					wordIncorrectCount={this.state.word}
				/>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='learn-guess-input'>
						What's the translation for this word?
					</label>
					<input
						id='learn-guess-input'
						type='text'
						defaultValue={this.state.guess}
						onChange={e => this.setState({ guess: e.target.value })}
						required
					></input>

					{
            (this.state.submitted) 
              ? <Button type='button' onClick={this.handleNextWord}>Try another word!</Button>
              : <Button type='submit'>Submit your answer</Button>
          }
				</form>
				<p>You have answered this word correctly {wordCorrectCount} times.</p>
				<p>
					You have answered this word incorrectly {wordIncorrectCount} times.
				</p>
			</>
		);
	};
}

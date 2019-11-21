import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import languageApiService from "../../services/language-api-service";
import LanguageContext from "../../contexts/LanguageContext";
import DisplayScore from "./DisplayScore";
import DisplayFeedback from "./DisplayFeedback";
import { Label, Input } from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import './Learning.css'

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

	handleNextWord = e => {
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
		return (
			<div className='Learning'>
				<DisplayScore totalScore={this.state.totalScore} />

				{!this.state.submitted ? (
					<>
						<h2>Translate to English:</h2>
						<span className='italic'>{nextWord}</span>
					</>
				) : (
					<DisplayFeedback
						isCorrect={this.state.isCorrect}
						nextWord={nextWord}
						answer={this.state.answer}
						guess={this.state.guess}
						submitted={this.state.submitted}
					/>
				)}

				{/* render the form only if a guess hasn't been submitted */}
				{!this.state.submitted ? (
					<form className='Learning__form' onSubmit={this.handleSubmit}>
						<Label htmlFor='learn-guess-input'>
							What's the translation for this word?
						</Label>{' '}
						<Input
							className='Learning__Input'
							id='learn-guess-input'
							type='text'
							defaultValue={this.state.guess}
							onChange={e => this.setState({ guess: e.target.value })}
							required
						></Input>
						<Button type='submit'>Submit your answer</Button>
					</form>
				) : (
					// Otherwise just render the next button
					<Button onClick={this.handleNextWord}>Try another word!</Button>
				)}

				<p className='Learning__p wordCounter'>You have answered this word correctly <span className='bold'>{wordCorrectCount}</span> times.</p>
				<p className='Learning__p wordCounter'>
					You have answered this word incorrectly <span className='bold'>{wordIncorrectCount}</span> times.
				</p>
			</div>
		);
	};
}

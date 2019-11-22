import React, { Component } from "react";
// import { Link } from 'react-router-dom'
import languageApiService from "../../services/language-api-service";
import LanguageContext from "../../contexts/LanguageContext";
import DisplayScore from "./DisplayScore";
// import DisplayFeedback from "./DisplayFeedback";
import QuestionView from "./QuestionView/QuestionView";
import FeedbackView from "./FeedbackView/FeedbackView";
// import { Label, Input } from "../../components/Form/Form";
// import Button from "../../components/Button/Button";
import "./Learning.css";

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
		const {
			nextWord,
			totalScore,
			wordCorrectCount,
			wordIncorrectCount
		} = this.state.nextWordInfo;
		this.resetState();
		this.context.setNewWord(
			nextWord,
			totalScore,
			wordCorrectCount,
			wordIncorrectCount
		);
	};

	setGuess = guess => {
		this.setState({guess})
	}

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
					<QuestionView
						nextWord={nextWord}
						wordCorrectCount={wordCorrectCount}
						wordIncorrectCount={wordIncorrectCount}
						handleSubmit={this.handleSubmit}
						setGuess={this.setGuess}
					/>
				) : (
					<FeedbackView
						isCorrect={this.state.isCorrect}
						nextWord={nextWord}
						answer={this.state.answer}
						guess={this.state.guess}
						submitted={this.state.submitted}
						handleNextWord={this.handleNextWord}
					/>
				)}
			</div>
		);
	};
}

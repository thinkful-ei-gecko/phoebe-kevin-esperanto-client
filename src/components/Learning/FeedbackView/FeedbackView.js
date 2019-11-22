import React, { Component } from "react";
import Button from "../../Button/Button";
import "./FeedbackView.css";

class FeedbackView extends Component {
	handlePressEnter = e => {
		if (e.keyCode === 13) {
			document.querySelector(".nextButton").submit();
		}
	};

	componentDidMount = () => {
		window.addEventListener("keypress", this.handlePressEnter);
	};

	componentWillUnmount = () => {
		window.removeEventListener("keypress", this.handlePressEnter);
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleNextWord();
	};

	render = () => {
		const { isCorrect, nextWord, answer, guess } = this.props;

		// Re-add after grading
		// <div
		// 	className='FeedbackView__p'
		// 	dangerouslySetInnerHTML={{ __html: `Esperanto: "${this.props.nextWord}"` }}
		// />
		// <div className='FeedbackView__p'>
		// 	English: "{this.props.answer}"
		// </div>
		// {!wasCorrect && (
		// 	<div className='FeedbackView__p'>
		// 		You said: "{this.props.guess}"
		// 	</div>
		// )}
		return (
			<div className='Learning__mainContainer DisplayFeedback'>
				{isCorrect ? (
					<>
						<h2 className='Learning__h2'>You were correct! :D</h2>
						<p className='FeedbackView__p pContainer'>
							The correct translation for "<span className='italic'>{nextWord}</span>" is "{answer}".
						</p>
					</>
				) : (
					<>
						<h2 className='Learning__h2'>Good try, but not quite right :(</h2>
						<p className='FeedbackView__p pContainer'>
							The correct translation for "<span className='italic'>{nextWord}</span>" is "{answer}". You said "{guess}".
						</p>
					</>
				)}
				<form className='nextButton' onSubmit={this.handleSubmit}>
					<Button
						className='FeedbackView__Button mobile___longButton'
						abindex='1'
						type='submit'
					>
						Next
					</Button>
				</form>
			</div>
		);
	};
}

export default FeedbackView;

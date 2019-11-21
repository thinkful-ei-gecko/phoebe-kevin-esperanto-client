import React from "react";
import { Label, Input } from "../../components/Form/Form";
import Button from "../../components/Button/Button";

const QuestionView = props => {
	return (
		<>
			<div className='Learning__mainContainer'>
				<h2>Write this in English:</h2>
				<span className='italic esperantoWord' dangerouslySetInnerHTML={{__html: props.nextWord}} />
				<form className='Learning__form' onSubmit={props.handleSubmit}>
					<div className='Learning_div labelAndInputContainer'>
						<Label
							className='Learning__Label italic'
							htmlFor='learn-guess-input'
						>
							{/* What's the translation for this word? */}
							English Translation
						</Label>{" "}
						<Input
							className='Learning__Input'
							id='learn-guess-input'
							type='text'
							defaultValue={props.guess}
							onChange={e => props.setGuess(e.target.value)}
							required
						></Input>
						<Button className='Learning__Button' type='submit'>
							Check
						</Button>
					</div>
				</form>
			</div>
			<div className='thisWordScore'>
				<p className='Learning__p wordCounter bold'>
					Correct: {props.wordCorrectCount}
				</p>
				<p className='Learning__p wordCounter bold'>
					Wrong: {props.wordIncorrectCount}
				</p>
			</div>
		</>
	);
};

export default QuestionView;

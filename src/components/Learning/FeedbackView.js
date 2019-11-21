import React from "react";
import Button from "../../components/Button/Button";

const FeedbackView = props => {
	return (
		<>
      <div className='DisplayFeedback'>
        {(props.isCorrect)
          ? <h2 className='DisplayFeedback'>You were correct! :D</h2>
          : <h2 className='DisplayFeedback'>Good try, but not quite right :(</h2>
        }
        <p className='DisplayFeedback'>
            <span className='answers'>Esperanto:<span className='italic' dangerouslySetInnerHTML={{__html: props.nextWord}} /></span>
            <span className='answers'>English: <span className='italic'> {props.answer}</span></span>
            {!props.isCorrect && <span className='answers'>You said: <span className='italic red'> {props.guess}</span></span>}
        </p>
      </div>
			<Button onClick={props.handleNextWord}>Next</Button>
		</>
	);
};


export default FeedbackView;

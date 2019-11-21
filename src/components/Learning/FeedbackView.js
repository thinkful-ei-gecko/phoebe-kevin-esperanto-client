import React, { Component } from "react";
import Button from "../../components/Button/Button";

class FeedbackView extends Component {
  handlePressEnter = (e) => {
    if (e.keyCode === 13) {
      document.querySelector('.nextButton').submit();
    }
  };

  componentDidMount = () => {
    window.addEventListener('keypress', this.handlePressEnter);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keypress', this.handlePressEnter);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleNextWord();
  }

	render = () => {
    return (
      <>
        <div className='DisplayFeedback'>
          {(this.props.isCorrect)
            ? <h2 className='DisplayFeedback'>You were correct! :D</h2>
            : <h2 className='DisplayFeedback'>Good try, but not quite right :(</h2>
          }
          <p className='DisplayFeedback'>
              <span className='answers'>Esperanto:<span className='italic' dangerouslySetInnerHTML={{__html: this.props.nextWord}} /></span>
              <span className='answers'>English: <span className='italic'> {this.props.answer}</span></span>
              {!this.props.isCorrect && <span className='answers'>You said: <span className='italic red'> {this.props.guess}</span></span>}
          </p>
        </div>
        <form className='nextButton' onSubmit={this.handleSubmit}>
          <Button tabindex='1' type='submit'>Next</Button>
        </form>
      </>
    );
  }
};

export default FeedbackView;

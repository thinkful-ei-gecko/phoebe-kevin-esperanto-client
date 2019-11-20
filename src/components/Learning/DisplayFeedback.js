import React from 'react'

const DisplayFeedback = props => {
  if (props.submitted) {
    return (
      <div className='DisplayFeedback'>
        {(props.isCorrect)
          ? <h2 className='DisplayFeedback'>You were correct! :D</h2>
          : <h2 className='DisplayFeedback'>Good try, but not quite right :(</h2>
        }
        <p className='DisplayFeedback'>The correct translation for <span className='italic'>{props.nextWord}</span> was <span className='italic green'>{props.answer}</span> and you chose <span className={`italic ${props.isCorrect ? 'green' : 'red'}`}>{props.guess}</span>!</p>
      </div>
    )
  } else {
    return (
      <>
        <h1>sup</h1>
      </>
    )
  }
}

export default DisplayFeedback

import React from 'react'

const DisplayFeedback = props => {
  if (props.submitted) {
    return (
      <div className='DisplayFeedback'>
        {(props.isCorrect)
          ? <h2 className='DisplayFeedback'>You were correct! :D</h2>
          : <h2>Good try, but not quite right :(</h2>
        }
        <p className='DisplayFeedback'>The correct translation for {props.nextWord} was {props.answer} and you chose {props.guess}!</p>
      </div>
    )
  } else {
    return null
  }
}

export default DisplayFeedback

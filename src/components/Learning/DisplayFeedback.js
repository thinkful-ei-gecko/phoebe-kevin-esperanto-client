import React from 'react'

const DisplayFeedback = props => {
  if (props.submitted) {
    return (
      <div className='DisplayFeedback'>
        {(props.isCorrect)
          ? <h2 className='DisplayFeedback'>You were correct! :D</h2>
          : <h2 className='DisplayFeedback'>Good try, but not quite right :(</h2>
        }
        <p className='DisplayFeedback'>
          <ul>
            <li className='DisplayFeedback__li'>Esperanto: <span className='italic'>{props.nextWord}</span></li>
            <li className='DisplayFeedback__li'>English: <span className='italic green'>{props.answer}</span></li>
            {props.isCorrect && <li className='DisplayFeedback__li'>You said: <span className='italic red'>{props.guess}</span></li>}
          </ul>
        </p>
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

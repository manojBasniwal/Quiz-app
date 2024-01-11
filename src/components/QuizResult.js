import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className="result-container">
      Your Score :{props.score}
      <br/>
      Total Score:{props.totalScore}
    </div>
    <input className="next-button" value="Try Again" type="button" onClick={props.tryAgain}/>
    </>
  )
}

export default QuizResult

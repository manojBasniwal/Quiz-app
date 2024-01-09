import React from 'react'
import {QuizData} from '../Data/QuizData'

function Quiz() {
  return (
    <div>
      <h2 className="heading-text">TODO APP</h2>
      <div className="container">
        <div className="question">
            <span class="question-number">1.</span>
            <span class="question-text">
                {QuizData[0].question}
            </span>
        </div>
        <div className="option-container">
            {
              QuizData[0].options.map((option,i)=>{
                // console.log(QuizData, "manoj")
                return(
                    <button className="option-button">{option}</button>
                )
              })  
            }
        </div>
        <input class="next-button" type="button" value='Next'/>
      </div>
    </div>
  )
}

export default Quiz

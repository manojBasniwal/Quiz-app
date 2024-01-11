import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0)
        } else {
            setShowResult(true)
        }

    }
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
    return (
        <div>
            <h2 className="heading-text">TODO APP</h2>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span className="question-number">{currentQuestion + 1}</span>
                            <span className="question-text">
                                {QuizData[currentQuestion].question}
                            </span>
                        </div>
                        <div className="option-container">
                            {
                                QuizData[currentQuestion].options.map((option, i) => {
                                    // console.log(QuizData, "manoj")
                                    return (
                                        <button
                                            //  className="option-button"
                                            className={`option-button ${clickedOption === i + 1 ? "checked" : null
                                                }`}
                                            key={i}
                                            onClick={() => setClickedOption(i + 1)}
                                        >
                                            {option}</button>
                                    )
                                })
                            }
                        </div>
                        <input className="next-button" type="button" value='Next' onClick={changeQuestion} />
                    </>
                )}
            </div>
        </div>
    )
}

export default Quiz

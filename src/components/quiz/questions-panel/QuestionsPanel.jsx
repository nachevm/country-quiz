import React, { useState } from 'react'
import Question from './Question'
import PropTypes from 'prop-types'

const QuestionsPanel = ({ questions, score, setScore, onQuestionsDone }) => {
  const [questionIndex, setQuestionIndex] = useState(0)

  const onClickAnswer = correct => {
    if (correct) {
      setScore(score + 1)
    }
    setQuestionIndex(questionIndex + 1)
    if (questionIndex + 1 === questions.length) {
      onQuestionsDone()
    }
  }

  return (
    <div className="container p-1 my-3 text-white text-center">
      <h1 className="mb-3">Countries Quiz!</h1>
      <h3>Question {questionIndex + 1} / {questions.length}</h3>
      {questions.length > questionIndex && <Question question={questions[questionIndex]} onClickAnswer={onClickAnswer} />}
    </div>
  )
}

QuestionsPanel.propTypes = {
  questions: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  onQuestionsDone: PropTypes.func.isRequired
}

export default QuestionsPanel

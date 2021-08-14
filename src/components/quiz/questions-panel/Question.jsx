import React from 'react'
import Answer from './Answer'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Question = ({ question, onClickAnswer }) =>
  <div className="container p-3 my-3 bg-dark text-white">
    <div className="row">
      <span className="text-center">{question.text}</span>
    </div>
    <div className="row">
      {question.answers.map(answer => <Answer key={v4()} answer={answer} onClickAnswer={onClickAnswer} />)}
    </div>
  </div>

Question.propTypes = {
  question: PropTypes.shape({ text: PropTypes.string, answers: PropTypes.array }).isRequired,
  onClickAnswer: PropTypes.func.isRequired
}

export default Question

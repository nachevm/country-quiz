import React from 'react'
import PropTypes from 'prop-types'

const Answer = ({ answer, onClickAnswer }) =>
  <button className="col btn btn-success p-1 m-3" onClick={() => onClickAnswer(answer.correct)}>
    {answer.text}
  </button>

Answer.propTypes = {
  answer: PropTypes.shape({ text: PropTypes.string, correct: PropTypes.bool }).isRequired,
  onClickAnswer: PropTypes.func.isRequired
}

export default Answer

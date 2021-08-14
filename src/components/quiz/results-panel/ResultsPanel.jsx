import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getArray, pushItems } from '../../../utils/LocalStorageUtils'
import ResultsTable from './ResultsTable'
import ResultForm from './ResultForm'

const ResultsPanel = ({ score, onPlayAgain }) => {
  const [validInput, setValidInput] = useState(true)
  const [disabledInput, setDisabledInput] = useState(false)
  const results = getArray(process.env.REACT_APP_LOCAL_STORAGE_RESULTS_KEY)

  const onSubmitResult = e => {
    e.preventDefault()
    if (!e.target[0].value) {
      setValidInput(false)
      return
    }
    setValidInput(true)
    setDisabledInput(true)
    pushItems(process.env.REACT_APP_LOCAL_STORAGE_RESULTS_KEY, { name: e.target[0].value, score: score })
  }

  return (
    <div className="container p-2 my-3 text-white">
      <div className="row mx-1">
        <ResultForm className="col-md" onSubmit={onSubmitResult} valid={validInput} disabled={disabledInput} />
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <span>Your score: <b>{score}</b></span>
        </div>
        <button className="col-md-2 btn btn-success" onClick={onPlayAgain} disabled={!disabledInput}>
          Play again!
        </button>
      </div>
      <div className="row mt-3 mx-1">
        {results.length > 0 && <ResultsTable results={results} />}
      </div>
    </div>
  )
}

ResultsPanel.propTypes = {
  score: PropTypes.number.isRequired,
  onPlayAgain: PropTypes.func.isRequired
}

export default ResultsPanel

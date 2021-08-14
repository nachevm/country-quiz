import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const ResultForm = ({ onSubmit, disabled, valid, ...rest }) => {
  const inputRef = useRef(null)

  useEffect(() => inputRef.current.focus(), [])

  return (
    <form onSubmit={onSubmit} {...rest}>
      <div className="row">
        <input
          className={'col form-control' + (valid ? '' : ' is-invalid')}
          disabled={disabled}
          placeholder="Input your name!"
          ref={inputRef}
        />
        <button id="result-form-input-btn" className="col-2 mx-2 p-1 btn btn-success" disabled={disabled}>Enter</button>
      </div>
    </form>
  )
}

ResultForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
}

export default ResultForm

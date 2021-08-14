import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const ResultsTable = ({ results }) => (
  <table className="table table-striped table-bordered table-dark">
    <thead>
    <tr>
      <th scope="col">Rank</th>
      <th scope="col">Name</th>
      <th scope="col">Score</th>
    </tr>
    </thead>
    <tbody>
    {
      results.sort((a, b) => b.score - a.score).map((result, i) =>
        <tr key={v4()}>
          <td>{i + 1}</td>
          <td>{result.name}</td>
          <td>{result.score}</td>
        </tr>
      )
    }
    </tbody>
  </table>
)

ResultsTable.propTypes = {
  results: PropTypes.array.isRequired,
}

export default ResultsTable

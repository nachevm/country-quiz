import React, { useState } from 'react'
import QuestionsPanel from './questions-panel/QuestionsPanel'
import { useQuery } from '@apollo/client'
import { COUNTRIES } from './Queries'
import ResultsPanel from './results-panel/ResultsPanel'
import { createQuestions } from './QuestionFactory'

const Quiz = () => {
  const { loading, error, data } = useQuery(COUNTRIES)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const onPlayAgain = () => {
    setScore(0)
    setShowResults(false)
  }

  if (loading) {
    return <div className="my-3 text-white">Loading...</div>
  } else if (error) {
    return <div className="my-3 text-white">Error! ${error.message}</div>
  }
  return (
    <>
      {!showResults &&
      <QuestionsPanel
        questions={createQuestions(data.countries)}
        score={score}
        setScore={setScore}
        onQuestionsDone={() => setShowResults(true)}
      />
      }
      {showResults && <ResultsPanel score={score} onPlayAgain={onPlayAgain} />}
    </>
  )
}

export default Quiz

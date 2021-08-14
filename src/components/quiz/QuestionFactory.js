import { min, sample, shuffle } from 'lodash'
import questionTypes from './QuestionTypes'

const createAnswer = (country, questionType, correct) => ({ text: questionType.getAnswer(country), correct })

const createIncorrectAnswers = (countries, correctCountry, questionType) => {
  const answers = []
  while (answers.length < process.env.REACT_APP_MAX_ANSWERS - 1) {
    const answer = createAnswer(sample(countries), questionType, false)
    if (answer.text !== questionType.getAnswer(correctCountry) && !answers.find(a => a.text === answer.text)) {
      answers.push(answer)
    }
  }
  return answers
}

const createQuestion = (countries, correctCountry, questionType) => ({
  text: questionType.getQuestion(correctCountry),
  answers: shuffle([
    createAnswer(correctCountry, questionType, true), ...createIncorrectAnswers(countries, correctCountry, questionType)
  ])
})

export const createQuestions = countries => shuffle(countries)
  .slice(0, min([process.env.REACT_APP_MAX_QUESTIONS, countries.length]))
  .map(country => createQuestion(countries, country, sample(questionTypes)))

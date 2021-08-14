import { createQuestions } from './QuestionFactory'
import { v4 } from 'uuid'

const createRandomCountry = () =>
  ({ "name": v4(), "phone": v4(), "capital": v4(), "currency": v4(), "continent": { "name": v4() }, "languages": [{ "name": v4() }] })
const createRandomCountries = n => Array.from({ length: n }, () => createRandomCountry())

it('creates as many questions as there are countries if total countries is less than max defined in env', () => {
  expect(createQuestions(createRandomCountries(process.env.REACT_APP_MAX_QUESTIONS - 1)).length)
    .toEqual(process.env.REACT_APP_MAX_QUESTIONS - 1)
})

it('creates as many questions as defined in env if there are more countries than max defined in env', () => {
  expect(createQuestions(createRandomCountries(process.env.REACT_APP_MAX_QUESTIONS + 1)).length)
    .toEqual(Number(process.env.REACT_APP_MAX_QUESTIONS))
})

it('creates as many answers as defined in env', () => {
  createQuestions(createRandomCountries(process.env.REACT_APP_MAX_QUESTIONS))
    .forEach(q => expect(q.answers.length).toEqual(Number(process.env.REACT_APP_MAX_ANSWERS)))
})

it('creates only 1 correct answer per question', () => {
  createQuestions(createRandomCountries(process.env.REACT_APP_MAX_QUESTIONS))
    .forEach(q => expect(q.answers.filter(a => a.correct).length).toEqual(1))
})

it('creates only unique answers per question', () => {
  createQuestions(createRandomCountries(process.env.REACT_APP_MAX_ANSWERS))
    .forEach(q => q.answers.forEach(answer => expect(q.answers.filter(a => a.text === answer.text).length).toEqual(1)))
})

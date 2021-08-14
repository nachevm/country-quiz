import React from 'react'
import QuestionsPanel from './QuestionsPanel'
import { act } from 'react-dom/test-utils'
import { render, unmountComponentAtNode } from 'react-dom'

let container = null

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
})

it('increases score if answered correctly', () => {
  let score = 0
  act(() => {
    render(<QuestionsPanel
      onQuestionsDone={jest.fn}
      setScore={newScore => score = newScore}
      score={score}
      questions={[{ answers: [{ correct: true }] }]}
    />, container)
  })

  container.querySelector(".btn").click()

  expect(score).toEqual(1)
})

it("doesn't increase score if answered incorrectly", () => {
  let score = 0
  act(() => {
    render(<QuestionsPanel
      onQuestionsDone={jest.fn}
      setScore={newScore => score = newScore}
      score={score}
      questions={[{ answers: [{}] }]}
    />, container)
  })

  container.querySelector(".btn").click()

  expect(score).toEqual(0)
})

it("triggers onQuestionsDone if answered last question", () => {
  const onQuestionsDone = jest.fn()
  act(() => {
    render(<QuestionsPanel
      onQuestionsDone={onQuestionsDone}
      setScore={() => true}
      score={0}
      questions={[{ answers: [{ correct: true }] }]}
    />, container)
  })

  container.querySelector(".btn").click()

  expect(onQuestionsDone).toBeCalled()
})

it("changes question & index when answering", () => {
  act(() => {
    render(<QuestionsPanel
      onQuestionsDone={jest.fn()}
      setScore={jest.fn()}
      score={0}
      questions={[{ text: 'A', answers: [{}] }, { text: 'B', answers: [{}] }, { text: 'C', answers: [{}] }]}
    />, container)
  })

  expect(container.querySelector("span").textContent).toEqual("A")
  expect(container.querySelector("h3").textContent).toContain("1 / 3")

  container.querySelector(".btn").click()

  expect(container.querySelector("span").textContent).toEqual("B")
  expect(container.querySelector("h3").textContent).toContain("2 / 3")

  container.querySelector(".btn").click()

  expect(container.querySelector("span").textContent).toEqual("C")
  expect(container.querySelector("h3").textContent).toContain("3 / 3")
})

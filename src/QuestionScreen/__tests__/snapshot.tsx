import React from "react"
import renderer from "react-test-renderer"

import QuestionScreen from ".."

test("QuestionScreen Snapshot", () => {
  const questionText = "some question"
  const answers = [
    { text: "Answer 1", correct: false },
    { text: "Answer 2", correct: true },
  ]
  const question = {
    text: questionText,
    answers,
  }
  const tree = renderer
    .create(
      <QuestionScreen
        question={question}
        onCorrectAnswer={() => {}}
        onIncorrectAnswer={() => {}}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

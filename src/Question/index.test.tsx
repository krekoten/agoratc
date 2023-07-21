import React from "react"
import Question from ".";
import { render, screen } from "@testing-library/react"

test("contains question section", () => {
  const questionText = "some question"
  const answers = [
    {text: "Answer 1", correct: false},
    {text: "Answer 2", correct: true}
  ]
  render(<Question text={questionText} answers={answers} />)

  const question = screen.getByText(questionText)
  
  expect(question).toBeInTheDocument()
})

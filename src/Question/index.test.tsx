import React from "react"
import Question from ".";
import { render, screen } from "@testing-library/react"

describe("Question", () => {
  const questionText = "some question"
  const answers = [
    {text: "Answer 1", correct: false},
    {text: "Answer 2", correct: true}
  ]

  beforeEach(() => {
    render(<Question text={questionText} answers={answers} />)
  })

  it("contains question section", () => {
    const question = screen.getByText(questionText)
    expect(question).toBeInTheDocument()
  })

  it("contains answers", () => {
    answers.forEach(({ text: answerText }) => {
      expect(screen.getByText(answerText)).toBeInTheDocument()
    })
  })
})

import React from "react"
import Answers from ".";
import { render, screen, within } from "@testing-library/react"

describe("Answers", () => {
  const answers = [
    {text: "Answer 1", correct: false},
    {text: "Answer 2", correct: true}
  ]

  beforeEach(() => {
    render(<Answers answers={answers} />)
  })

  it("has class options", () => {
    const answersSection = screen.getByTestId("answers")

    expect(answersSection).toBeInTheDocument()
    expect(answersSection).toHaveClass("options")
  })

  it("contains answers", () => {
    const answersSection = screen.getByTestId("answers")

    answers.forEach(({ text: answerText }) => {
      expect(within(answersSection).getByText(answerText)).toBeInTheDocument()
    })
  })
})

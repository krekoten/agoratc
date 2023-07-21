import React from "react"
import QuestionScreen from ".";
import { render, screen } from "@testing-library/react"

describe("QuestionScreen", () => {
  const questionText = "some question"
  const answers = [
    {text: "Answer 1", correct: false},
    {text: "Answer 2", correct: true}
  ]

  beforeEach(() => {
    render(<QuestionScreen text={questionText} answers={answers} />)
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

  it("contains Next button", () => {
    const nextButton = screen.getByRole("button", { name: "Next" })

    expect(nextButton).toBeInTheDocument()
    expect(nextButton).toHaveClass("next")
  })
})

import React from "react"
import QuestionScreen from ".";
import { render, screen, fireEvent } from "@testing-library/react"

describe("QuestionScreen", () => {
  const questionText = "some question"
  const answers = [
    {text: "Answer 1", correct: false},
    {text: "Answer 2", correct: true}
  ]
  const question = {
    text: questionText,
    answers
  }

  const onCorrectAnswer = jest.fn()
  const onIncorrectAnswer = jest.fn()

  beforeEach(() => {
    render(<QuestionScreen question={question} onCorrectAnswer={onCorrectAnswer} onIncorrectAnswer={onIncorrectAnswer} />)
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

  describe("Next button", () => {
    it("calls onCorrectAnswer for correct answer", () => {
      fireEvent.click(screen.getByText("Answer 2"))
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(onCorrectAnswer).toHaveBeenCalledTimes(1)
      expect(onIncorrectAnswer).not.toHaveBeenCalled()
    })

    it("calls onIncorrectAnswer for incorrect answer", () => {
      fireEvent.click(screen.getByText("Answer 1"))
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(onIncorrectAnswer).toHaveBeenCalledTimes(1)
      expect(onCorrectAnswer).not.toHaveBeenCalled()
    })

    it("calls onIncorrectAnswer when no answer has been selected", () => {
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(onIncorrectAnswer).toHaveBeenCalledTimes(1)
      expect(onCorrectAnswer).not.toHaveBeenCalled()
    })
  })
})

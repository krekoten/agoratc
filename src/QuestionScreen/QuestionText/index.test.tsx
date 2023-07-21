import React from "react"
import QuestionText from ".";
import { render, screen } from "@testing-library/react"

describe("QuestionText", () => {
  const questionText = "some question"

  beforeEach(() => {
    render(<QuestionText text={questionText} />)
  })

  it("contains question section", () => {
    const question = screen.getByText(questionText)
    expect(question).toBeInTheDocument()
  })

  it("has question class", () => {
    const question = screen.getByText(questionText)
    expect(question).toHaveClass("question")
  })
})

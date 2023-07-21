import React from "react"
import QuestionText from ".";
import { render, screen } from "@testing-library/react"

describe("QuestionText", () => {
  let question: HTMLElement|null = null;

  beforeAll(() => {
    const questionText = "some question"
    render(<QuestionText text={questionText} />)
  
    question = screen.getByText(questionText)
  })

  it("contains question section", () => {
    expect(question).toBeInTheDocument()
  })

  it("has question class", () => {
    expect(question).toHaveClass("question")
  })
})

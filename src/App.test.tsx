import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  const questions = [
    {
      text: "Question 1",
      answers: [
        { text: "Correct", correct: true },
        { text: "Wrong", correct: false },
      ],
    },
    {
      text: "Question 2",
      answers: [
        { text: "Correct", correct: true },
        { text: "Wrong", correct: false },
      ],
    },
  ]

  beforeEach(() => {
    render(<App questions={questions} />)
  })

  describe("clicking on all correct answers", () => {
    it("shows correct score", () => {
      fireEvent.click(screen.getByRole("button", { name: "Start the Quiz" }))

      expect(screen.getByText("Question 1")).toBeInTheDocument()
      fireEvent.click(screen.getByText("Correct"))
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(screen.getByText("Question 2")).toBeInTheDocument()
      fireEvent.click(screen.getByText("Correct"))
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(screen.getByText("Final score")).toBeInTheDocument()
      const score = screen.getByText("2")
      expect(score).toBeInTheDocument()
      expect(score).toHaveClass("score")
    })
  })

  describe("clicking on one correct answer", () => {
    it("shows correct score", () => {
      fireEvent.click(screen.getByRole("button", { name: "Start the Quiz" }))

      expect(screen.getByText("Question 1")).toBeInTheDocument()
      fireEvent.click(screen.getByText("Correct"))
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(screen.getByText("Question 2")).toBeInTheDocument()
      fireEvent.click(screen.getByText("Wrong"))
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(screen.getByText("Final score")).toBeInTheDocument()
      const score = screen.getByText("1")
      expect(score).toBeInTheDocument()
      expect(score).toHaveClass("score")
    })
  })

  describe("clicking on all wrong answers", () => {
    it("shows correct score", () => {
      fireEvent.click(screen.getByRole("button", { name: "Start the Quiz" }))

      expect(screen.getByText("Question 1")).toBeInTheDocument()
      fireEvent.click(screen.getByText("Wrong"))
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(screen.getByText("Question 2")).toBeInTheDocument()
      fireEvent.click(screen.getByText("Wrong"))
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(screen.getByText("Final score")).toBeInTheDocument()
      const score = screen.getByText("0")
      expect(score).toBeInTheDocument()
      expect(score).toHaveClass("score")
    })
  })

  describe("clicking through without selecting any answer", () => {
    it("shows correct score", () => {
      fireEvent.click(screen.getByRole("button", { name: "Start the Quiz" }))

      expect(screen.getByText("Question 1")).toBeInTheDocument()
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(screen.getByText("Question 2")).toBeInTheDocument()
      fireEvent.click(screen.getByRole("button", { name: "Next" }))

      expect(screen.getByText("Final score")).toBeInTheDocument()
      const score = screen.getByText("0")
      expect(score).toBeInTheDocument()
      expect(score).toHaveClass("score")
    })
  })
})

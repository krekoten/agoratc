import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import StartScreen from ".."

describe("StartScreen", () => {
  const handleClick = jest.fn()

  beforeEach(() => {
    render(<StartScreen onStart={handleClick} />)
  })

  it("renders Start the Quiz button", () => {
    const startButton = screen.getByRole("button")
    expect(startButton).toBeInTheDocument()
    expect(startButton).toHaveTextContent("Start the Quiz")
    expect(startButton).toHaveClass("start")
  })

  describe("Start the Quiz button", () => {
    it("calls onStart handler", () => {
      fireEvent.click(screen.getByRole("button", { name: "Start the Quiz" }))

      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})

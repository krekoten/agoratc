import React from "react"
import { render, screen } from "@testing-library/react"

import StartScreen from "."

describe("StartScreen", () => {
  it("renders Start the Quiz button", () => {
    render(<StartScreen />)
    const startButton = screen.getByRole("button")
    expect(startButton).toBeInTheDocument()
    expect(startButton).toHaveTextContent("Start the Quiz")
    expect(startButton).toHaveClass("start")
  })
})

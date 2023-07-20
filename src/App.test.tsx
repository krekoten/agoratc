import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders welcome screen with 'Start the Quiz' button", () => {
  render(<App />)
  const startButton = screen.getByRole("button")
  expect(startButton).toBeInTheDocument()
  expect(startButton).toHaveTextContent("Start the Quiz")
  expect(startButton).toHaveClass("start")
})

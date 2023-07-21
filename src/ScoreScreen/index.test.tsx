import React from "react"
import ScoreScreen from ".";
import { render, screen } from "@testing-library/react"

describe("ScoreScreen", () => {
  const score = 5

  beforeEach(() => {
    render(<ScoreScreen score={score} />)
  })

  it("renders score", () => {
    const scoreElement = screen.getByText(score.toString())

    expect(scoreElement).toBeInTheDocument()
    expect(scoreElement).toHaveClass("score")
  })

  it("renders Restart button", () => {
    const restartButton = screen.getByRole("button", { name: "Restart" })
    
    expect(restartButton).toBeInTheDocument()
    expect(restartButton).toHaveClass("restart")
  })
})

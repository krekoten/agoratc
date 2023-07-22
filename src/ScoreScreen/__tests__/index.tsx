import React from "react"
import ScoreScreen from ".."
import { render, screen, fireEvent } from "@testing-library/react"

describe("ScoreScreen", () => {
  const score = 5
  const onRestart = jest.fn()

  beforeEach(() => {
    render(<ScoreScreen score={score} onRestart={onRestart} />)
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

  describe("Restart button", () => {
    it("calls onRestart handler", () => {
      fireEvent.click(screen.getByRole("button", { name: "Restart" }))

      expect(onRestart).toBeCalledTimes(1)
    })
  })
})

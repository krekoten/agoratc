import React from "react"
import { Answer } from "../../types"

interface AnswersParams {
  answers: Answer[]
}

function Answers({ answers }: AnswersParams): JSX.Element {
  return <div data-testid="answers" className="options">
    {answers.map(({ text }, index) => {
      return <span key={index}>{text}</span>
    })}
  </div>
}

export default Answers

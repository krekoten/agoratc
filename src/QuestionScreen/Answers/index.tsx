import React from "react"
import type { Answer } from "../../types"

import AnswerItem from "./AnswerItem"
import { RadioGroup } from "@mui/material"

interface AnswersParams {
  answers: Answer[]
  value: number | null
  onChange: (value: string) => void
}

function Answers({ answers, value, onChange }: AnswersParams): JSX.Element {
  return (
    <RadioGroup
      data-testid="answers"
      className="options"
      value={value}
      onChange={(_, radioValue) => {
        onChange(radioValue)
      }}
    >
      {answers.map(({ text }, index) => (
        <AnswerItem text={text} value={index} key={text} />
      ))}
    </RadioGroup>
  )
}

export default Answers

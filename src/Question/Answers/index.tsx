import React from "react"
import type { Answer } from "../../types"

import AnswerItem from "./AnswerItem"
import { RadioGroup } from "@mui/material"

interface AnswersParams {
  answers: Answer[]
}

function Answers({ answers }: AnswersParams): JSX.Element {
  return <RadioGroup data-testid="answers" className="options">
    {answers.map(({ text, correct }, index) => <AnswerItem text={text} correct={correct} key={index} />)}
  </RadioGroup>
}

export default Answers

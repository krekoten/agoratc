import React from "react"

import Button from "@mui/material/Button"

import QuestionText from "./QuestionText"
import Answers from "./Answers"

import type { Answer } from "../types"

interface QuestionParams {
  text: string,
  answers: Answer[]
}

function Question({text, answers}: QuestionParams): JSX.Element {
  return <>
    <QuestionText text={text} />
    <Answers answers={answers} />
    <Button className="next" variant="contained" color="primary">Next</Button>
  </>
}

export default Question

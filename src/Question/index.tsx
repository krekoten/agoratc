import React from "react"

import QuestionText from "./QuestionText"
import Answers from "./Answers"

import { Answer } from "../types"

interface QuestionParams {
  text: string,
  answers: Answer[]
}

function Question({text, answers}: QuestionParams): JSX.Element {
  return <>
    <QuestionText text={text} />
    <Answers answers={answers} />
  </>
}

export default Question

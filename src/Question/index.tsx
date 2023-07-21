import React from "react"

import QuestionText from "./QuestionText"

interface Answer {
  text: string,
  correct: boolean
}

interface QuestionParams {
  text: string,
  answers: Answer[]
}

function Question({text, answers}: QuestionParams): JSX.Element {
  return <>
    <QuestionText text={text} />
  </>
}

export default Question

import React, { useState } from "react"

import {Box, Button } from "@mui/material"

import QuestionText from "./QuestionText"
import Answers from "./Answers"

import type { Question } from "../types"

interface QuestionParams {
  question: Question,
  onCorrectAnswer: () => void,
  onIncorrectAnswer: () => void
}

function QuestionScreen({ question: { text, answers }, onCorrectAnswer, onIncorrectAnswer }: QuestionParams): JSX.Element {
  const [option, setOption] = useState<number | null>(null)

  function onClick(): void {
    if (option !== null && answers[option].correct) {
      onCorrectAnswer()
    } else {
      onIncorrectAnswer()
    }
    setOption(null)
  }

  return <Box sx={{display: "flex", flexDirection: "column", alignItems: "left", margin: 2}}>
    <QuestionText text={text} />
    <Answers answers={answers} value={option} onChange={(value: string) => { setOption(Number(value)) }} />
    <Button className="next" variant="contained" color="primary" onClick={onClick}>Next</Button>
  </Box>
}

export default QuestionScreen

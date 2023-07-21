import React from "react"

import {Box, Button } from "@mui/material"

import QuestionText from "./QuestionText"
import Answers from "./Answers"

import type { Answer } from "../types"

interface QuestionParams {
  text: string,
  answers: Answer[]
}

function QuestionScreen({text, answers}: QuestionParams): JSX.Element {
  return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <QuestionText text={text} />
    <Answers answers={answers} />
    <Button className="next" variant="contained" color="primary">Next</Button>
  </Box>
}

export default QuestionScreen

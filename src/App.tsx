import React, { useState } from "react"
import { Container, Typography } from "@mui/material"

import StartScreen from "./StartScreen"
import QuestionScreen from "./QuestionScreen"

import type { Question } from "./types"

import "./App.css"
import questions from "./questions.json"
import ScoreScreen from "./ScoreScreen"

enum appState {
  STARTED = "started",
  QUESTIONS = "questions",
  SCORE = "score"
}

function App(): JSX.Element {
  const [score, setScore] = useState(0)
  const [state, setState] = useState<appState>(appState.STARTED)
  const [questionNumber, setQuestionNumber] = useState(0)

  const question: Question = questions[questionNumber]

  return (
    <Container maxWidth="sm" sx={{p: 2}}>
      <Typography variant="h4">Agoracom - Tech Challenge - Quiz</Typography>
      {state === appState.STARTED && <StartScreen onStart={() => setState(appState.QUESTIONS)} />}
      {state === appState.QUESTIONS && <QuestionScreen {...question} />}
      {state === appState.SCORE && <ScoreScreen score={score} />}
    </Container>
  )
}

export default App

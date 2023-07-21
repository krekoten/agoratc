import React, { useState } from "react"
import Container from "@mui/material/Container"

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

function renderQuestions(questions: Question[]): JSX.Element {
  const [questionNumber, setQuestionNumber] = useState(0)

  const question: Question = questions[questionNumber]

  return <QuestionScreen {...question} />
}

function App(): JSX.Element {
  const [score, setScore] = useState(0)
  const [state, setState] = useState<appState>(appState.STARTED)

  return (
    <Container maxWidth="sm" sx={{p: 2}}>
      {state === appState.STARTED && <StartScreen />}
      {state === appState.QUESTIONS && renderQuestions(questions)}
      {state === appState.SCORE && <ScoreScreen score={score} />}
    </Container>
  )
}

export default App

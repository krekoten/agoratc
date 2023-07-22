import React, { useState } from "react"
import { Container, Typography } from "@mui/material"

import StartScreen from "./StartScreen"
import QuestionScreen from "./QuestionScreen"

import type { Question } from "./types"

import ScoreScreen from "./ScoreScreen"

enum appState {
  STARTED = "started",
  QUESTIONS = "questions",
  SCORE = "score",
}

const correctAnswerPoints = 1

interface AppParams {
  questions: Question[]
}

function App({ questions }: AppParams): JSX.Element {
  const [score, setScore] = useState(0)
  const [state, setState] = useState<appState>(appState.STARTED)
  const [questionNumber, setQuestionNumber] = useState(0)

  const question: Question = questions[questionNumber]

  function nextQuestionOrScore(): void {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(questionNumber + 1)
    } else {
      setState(appState.SCORE)
    }
  }

  function onCorrectAnswer(): void {
    setScore(score + correctAnswerPoints)
    nextQuestionOrScore()
  }

  function onRestart(): void {
    setScore(0)
    setQuestionNumber(0)
    setState(appState.STARTED)
  }

  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Typography variant="h4">Agoracom - Tech Challenge - Quiz</Typography>
      {state === appState.STARTED && (
        <StartScreen
          onStart={() => {
            setState(appState.QUESTIONS)
          }}
        />
      )}
      {state === appState.QUESTIONS && (
        <QuestionScreen
          question={question}
          onCorrectAnswer={onCorrectAnswer}
          onIncorrectAnswer={nextQuestionOrScore}
        />
      )}
      {state === appState.SCORE && <ScoreScreen score={score} onRestart={onRestart} />}
    </Container>
  )
}

export default App

import React from "react"

import type { Meta, StoryObj } from "@storybook/react"

import QuestionScreen from "."

const meta: Meta<typeof QuestionScreen> = {
  component: QuestionScreen,
}

export default meta

type Story = StoryObj<typeof QuestionScreen>

const question = {
  text: "some question",
  answers: [
    { text: "Answer 1", correct: false },
    { text: "Answer 2", correct: true },
  ],
}

const onCorrectAnswer = (): void => {}
const onIncorrectAnswer = (): void => {}

export const Layout: Story = {
  render: () => (
    <QuestionScreen
      question={question}
      onCorrectAnswer={onCorrectAnswer}
      onIncorrectAnswer={onIncorrectAnswer}
    />
  ),
}

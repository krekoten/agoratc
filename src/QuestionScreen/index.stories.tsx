import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import QuestionScreen from '.'

const meta: Meta<typeof QuestionScreen> = {
  component: QuestionScreen,
}

export default meta

type Story = StoryObj<typeof QuestionScreen>

const questionText = "some question"
const answers = [
  {text: "Answer 1", correct: false},
  {text: "Answer 2", correct: true}
]

export const Layout: Story = {
  render: () => <QuestionScreen text={questionText} answers={answers} />,
};

import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Question from '.'

const meta: Meta<typeof Question> = {
  component: Question,
}

export default meta

type Story = StoryObj<typeof Question>

const questionText = "some question"
const answers = [
  {text: "Answer 1", correct: false},
  {text: "Answer 2", correct: true}
]

export const Layout: Story = {
  render: () => <Question text={questionText} answers={answers} />,
};

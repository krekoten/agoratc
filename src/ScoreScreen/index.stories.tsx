import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import ScoreScreen from '.'

const meta: Meta<typeof ScoreScreen> = {
  component: ScoreScreen,
}

export default meta

type Story = StoryObj<typeof ScoreScreen>

export const Layout: Story = {
  render: () => <ScoreScreen score={5} onRestart={() => {}} />,
};

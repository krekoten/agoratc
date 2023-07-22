import React from "react"

import type { Meta, StoryObj } from "@storybook/react"

import StartScreen from "."

const meta: Meta<typeof StartScreen> = {
  component: StartScreen,
}

export default meta

type Story = StoryObj<typeof StartScreen>

export const Layout: Story = {
  render: () => <StartScreen onStart={() => {}} />,
}

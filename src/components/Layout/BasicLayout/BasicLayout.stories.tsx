import { BasicLayout } from './BasicLayout'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Layout/BasicLayout',
  component: BasicLayout,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BasicLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello World',
  },
}

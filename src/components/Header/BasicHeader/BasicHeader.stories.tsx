import { Layout } from 'antd'

import { BasicHeader } from './BasicHeader'

import type { Meta, StoryObj } from '@storybook/react'
const meta = {
  title: 'Components/Header/BasicHeader',
  component: BasicHeader,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} satisfies Meta<typeof BasicHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

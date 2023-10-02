import { userEvent } from '@storybook/testing-library'
import { Layout } from 'antd'

import { BasicSider } from './BasicSider'

import type { Meta, StoryObj } from '@storybook/react'
const meta = {
  title: 'Components/Sider/BasicSider',
  component: BasicSider,
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
} satisfies Meta<typeof BasicSider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Close: Story = {
  play: async ({ canvasElement }) => {
    const el = canvasElement.getElementsByClassName(
      'ant-layout-sider-trigger'
    )[0]
    await userEvent.click(el)
  },
}

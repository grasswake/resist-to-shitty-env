import React from 'react'

import { FileMarkdownOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

import { BasicSider } from './BasicSider'

import type { MenuItems } from '@/types'
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

const menuItems: MenuItems = [
  {
    key: 'mermaid',
    icon: React.createElement(FileMarkdownOutlined),
    label: `Mermaid`,

    children: [
      {
        key: 'batch_schedule',
        label: 'Batch Schedule',
      },
    ],
  },
]

export const Default: Story = {
  args: {
    menuItems,
  },
}

export const DefaultCollapsed: Story = {
  args: {
    menuItems,
    defaultCollapsed: true,
  },
}

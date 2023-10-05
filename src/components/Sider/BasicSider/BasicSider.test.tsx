import React from 'react'

import { FileMarkdownOutlined } from '@ant-design/icons'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'

import { BasicSider } from './BasicSider'

import type { MenuItems, MenuClickEventHandler } from '@/types'

vi.mock('next/navigation', () => require('next-router-mock'))

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

test('should render BasicSider', async () => {
  render(<BasicSider menuItems={menuItems} />)

  expect(await screen.findByText('Mermaid')).not.toBeVisible()
})

test('should render BasicSider with defaultCollapsed is undefined', async () => {
  render(<BasicSider menuItems={menuItems} />)

  expect(await screen.findByText('Mermaid')).not.toBeVisible()
})

test('should render BasicSider with defaultCollapsed is false', async () => {
  render(<BasicSider menuItems={menuItems} defaultCollapsed={false} />)

  expect(await screen.findByText('Mermaid')).toBeVisible()
})

test('should collapse BasicSider by clicking collapse button', async () => {
  const { container } = render(<BasicSider menuItems={menuItems} />)

  const collapse = container.getElementsByClassName(
    'ant-layout-sider-trigger'
  )[0]

  await userEvent.click(collapse)

  expect(await screen.findByText('Mermaid')).toBeVisible()

  await userEvent.click(collapse)

  expect(await screen.findByText('Mermaid')).not.toBeVisible()
})

test('should call onMenuClick when clicking menu item', async () => {
  const onMenuClick: MenuClickEventHandler = vi.fn()
  const { container } = render(
    <BasicSider menuItems={menuItems} onMenuClick={onMenuClick} />
  )

  const collapse = container.getElementsByClassName(
    'ant-layout-sider-trigger'
  )[0]

  await userEvent.click(collapse)

  await userEvent.click(screen.getByText('Mermaid'))

  await userEvent.click(screen.getByText('Batch Schedule'))

  await waitFor(() => {
    expect(onMenuClick).toBeCalled()
  })
})

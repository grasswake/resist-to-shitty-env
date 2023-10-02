import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'

import { BasicHeader } from './BasicHeader'

import type { MenuItems, MenuClickEventHandler } from '@/types'

vi.mock('next/navigation', () => require('next-router-mock'))

const menuItems: MenuItems = [
  {
    key: 'mermaid',
    label: `Mermaid`,

    children: [
      {
        key: 'batch_schedule',
        label: 'Batch Schedule',
      },
    ],
  },
]

test('should render BasicHeader', async () => {
  render(<BasicHeader menuItems={menuItems} />)

  await waitFor(() => {
    expect(screen.getByText('Mermaid')).toBeDefined()
  })

  userEvent.hover(screen.getByText('Mermaid'))

  await waitFor(() => {
    expect(screen.getByText('Batch Schedule')).toBeDefined()
  })
})

test('should call onMenuClick when clicking menu item', async () => {
  const onMenuClick: MenuClickEventHandler = vi.fn()
  render(<BasicHeader menuItems={menuItems} onMenuClick={onMenuClick} />)

  await userEvent.hover(screen.getByText('Mermaid'))

  await waitFor(() => {
    userEvent.click(screen.getByText('Batch Schedule'))
    expect(onMenuClick).toBeCalled()
  })
})

import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'
import { expect, test, vi } from 'vitest'

import { BasicSider } from './BasicSider'
vi.mock('next/navigation', () => require('next-router-mock'))

test('should render BasicSider', async () => {
  render(<BasicSider />)

  await waitFor(() => {
    expect(screen.getByText('Mermaid')).toBeDefined()
  })

  userEvent.click(screen.getByText('Mermaid'))

  await waitFor(() => {
    expect(screen.getByText('Batch Schedule')).toBeDefined()
  })

  await waitFor(() => {
    userEvent.click(screen.getByText('Batch Schedule'))
    expect(mockRouter).toMatchObject({
      asPath: '/batch/batch_schedule',
    })
  })
})

test('should render BasicSider with collapsed', async () => {
  const { container } = render(<BasicSider />)

  const collapse = container.getElementsByClassName(
    'ant-layout-sider-trigger'
  )[0]

  await userEvent.click(collapse)

  expect(await screen.findByText('Mermaid')).not.toBeVisible()

  await userEvent.click(collapse)

  expect(await screen.findByText('Mermaid')).toBeVisible()
})

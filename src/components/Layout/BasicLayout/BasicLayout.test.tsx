import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'
import { expect, test, vi } from 'vitest'

import { BasicLayout } from './BasicLayout'

vi.mock('next/navigation', () => require('next-router-mock'))

test('should render BasicLayout', async () => {
  render(
    <BasicLayout>
      <div></div>
    </BasicLayout>
  )

  await waitFor(() => {
    expect(screen.getByText('Mermaid')).toBeDefined()
  })

  userEvent.click(screen.getByText('Mermaid'))

  await waitFor(() => {
    expect(screen.getByText('Batch Schedule')).toBeDefined()
  })
})

test('should call onMenuClick when clicking menu item', async () => {
  render(
    <BasicLayout>
      <div></div>
    </BasicLayout>
  )

  await userEvent.click(screen.getByText('Mermaid'))

  await waitFor(() => {
    userEvent.click(screen.getByText('Batch Schedule'))
    expect(mockRouter).toMatchObject({
      asPath: '/batch/batch_schedule',
    })
  })
})

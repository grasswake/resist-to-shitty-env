import { renderHook, act } from '@testing-library/react'
import { expect, test } from 'vitest'

import { useCollapsed } from './useCollapsed'

test('should collapsed the state', () => {
  const { result } = renderHook(() => useCollapsed())

  expect(result.current.collapsed).toBe(true)

  act(() => {
    result.current.collapse(false, 'clickTrigger')
  })

  expect(result.current.collapsed).toBe(false)
})

test('should define initial state', () => {
  const { result } = renderHook(() => useCollapsed(false))

  expect(result.current.collapsed).toBe(false)

  act(() => {
    result.current.collapse(true, 'clickTrigger')
  })

  expect(result.current.collapsed).toBe(true)
})

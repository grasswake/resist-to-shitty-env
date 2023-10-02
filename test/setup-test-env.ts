// 環境変数を設定する
// https://dev.classmethod.jp/articles/using-globalsetup-for-setting-environment-variables-to-be-referenced-during-vitest-tests/

import { NextFont } from 'next/dist/compiled/@next/font'
import { vi } from 'vitest'
import '@testing-library/jest-dom'

vi.mock('next/font/google', () => {
  return {
    Inter: (): NextFont => {
      return { className: 'mock_font', style: { fontFamily: 'Inter' } }
    },
  }
})

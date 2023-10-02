/// <reference types="vitest" />
/// <reference types="vite/client" />

// import path from 'path'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/setup-test-env.ts'],
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watchExclude: ['.*\\/node_modules\\/.*', '.*\\/build\\/.*'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
  },
  // resolve: {
  //   alias: {
  //     "@/*": path.resolve(__dirname, "./src"),
  //     "next/font/(.*)": require.resolve(
  //       "next/dist/build/jest/__mocks__/nextFontMock.js"
  //     ),
  //   },
  // },
})

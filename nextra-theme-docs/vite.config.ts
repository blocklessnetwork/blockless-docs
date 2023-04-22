// @ts-ignore
import { defineConfig } from 'vitest/config'
// @ts-ignore
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  }
})

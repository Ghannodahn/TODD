/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/TODD/' : '/',
    plugins: [react(), tsconfigPaths()],
    build: {
      outDir: 'TODD'
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: '.vitest/setup',
      include: ['**/test.{ts,tsx}', '**/*.test.{ts,tsx}']
    }
  }
})

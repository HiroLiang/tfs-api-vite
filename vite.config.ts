import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/demo': {
        target: 'http://localhost:8080/tfs-api/demo',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/demo/, '')
      }
    }
  }
})

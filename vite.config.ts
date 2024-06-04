import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/tfs-demo/',
  server: {
    proxy: {
      '/tfs-demo': {
        target: 'http://localhost:8080/tfs-demo',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tfs-demo/, '')
      }
    }
  }
})

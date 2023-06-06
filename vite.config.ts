import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  server: {
    port: 3000,
    host: "0.0.0.0",
    open: true,
    cors: true,
    proxy: {
      "/global-scenario-manager-service/api": {
        target: "http://172.23.21.148:10000", 
        changeOrigin: true,
      },
      "/global-model-driver-service": {
        target: "http://172.23.21.148:10000", 
        changeOrigin: true,
      },
      "/wwtp-paas-main-bus-service/api": {
        target: "http://172.23.21.148:10000", 
        changeOrigin: true,
      },
      "/iot-service/api": {
        target: "http://172.23.21.148:10000", 
        changeOrigin: true,
      },
    },
  },
})

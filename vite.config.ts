import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    server: {
          port: env.VITE_API_PORT,
          host: "0.0.0.0",
          open: true,
          cors: true,
          proxy: {
          "/identity-service": {
          target: env.VITE_API_BASE_URL, 
          changeOrigin: true,
          },
          "/global-scenario-manager-service": {
          target: env.VITE_API_BASE_URL, 
          changeOrigin: true,
          },
        "/global-model-driver-service": {
          target: env.VITE_API_BASE_URL, 
          changeOrigin: true,
          },
        "/wwtp-paas-main-bus-service": {
          target: env.VITE_API_BASE_URL, 
          changeOrigin: true,
        },
      },
    },
  }
})

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // This allows us to access environment variables from the system
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // This maps your existing process.env.API_KEY code to the actual variable
      'process.env.API_KEY': JSON.stringify(env.API_KEY) 
    }
  }
})
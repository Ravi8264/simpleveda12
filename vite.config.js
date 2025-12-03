import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // or host: '0.0.0.0'
    port: 5173  // default Vite port
  }
})
// ```

// Now when you run `npm run dev`, Vite will automatically show you both URLs:
// ```
//   ➜  Local:   http://localhost:5173/
//   ➜  Network: http://192.168.1.100:5173/
// ```

// Use the **Network** URL on your mobile device!

// **Note:** If you're using Vite, the default port is usually `5173`, not `3000`. So on your mobile, you'll access:
// ```
// http://YOUR_IP_ADDRESS:5173
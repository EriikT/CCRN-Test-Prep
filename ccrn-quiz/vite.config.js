import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['ecg/*.png'],
      manifest: {
        name: 'CCRN Practice Quiz',
        short_name: 'CCRN Quiz',
        display: 'standalone',
        icons: [
          {
            src: '/ecg/spheal.png',
            sizes: '475x475',
            type: 'image/png',
          }
        ]
      }
    })
  ],
})



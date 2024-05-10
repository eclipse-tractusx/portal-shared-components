import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './dev/App.tsx'
import { SharedThemeProvider } from './main.ts'

// eslint-disable-next-line
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SharedThemeProvider>
      <App />
    </SharedThemeProvider>
  </React.StrictMode>
)

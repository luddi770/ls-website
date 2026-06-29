import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import './theme.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

import "./i18n.js"

import "@fontsource/inter";
import "@fontsource-variable/hanken-grotesk";
import "@fontsource/jetbrains-mono";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

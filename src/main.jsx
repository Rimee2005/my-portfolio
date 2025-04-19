import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fade from './components/Fade'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fade/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fade from './components/Fade'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fade/>
  </StrictMode>,
)

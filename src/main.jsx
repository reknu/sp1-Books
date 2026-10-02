import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Formularz from './Formularz.jsx'
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formularz /> 
  </StrictMode>,
)

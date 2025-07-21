import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Grandparent } from './components/Grandparent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Grandparent />
  </StrictMode>
)

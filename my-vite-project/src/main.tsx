import { createRoot } from 'react-dom/client'
import './index.css'
import type { CSSProperties } from 'react'
import React from 'react'

let userColor = prompt("Podaj kolor(w postaci np: #ff43a1): ")
let content = null
if(userColor?.length !== 7)
{
  userColor = "black"
  content = "Błędny kolor!"
}

createRoot(document.getElementById('root')!).render(
  <>
    <div style={{
      width: 100,
      height: 100,
      color: 'white',
      backgroundColor: userColor
    }}>{content}</div>
  </>
)

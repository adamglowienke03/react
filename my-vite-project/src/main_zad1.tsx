import { createRoot } from 'react-dom/client'
import './index.css'
import type { CSSProperties } from 'react'
// import React from 'react'

const randColor = () => {
  const colors = ['red' , 'blue', 'green', 'yellow', 'purple']
  const index = Math.round(Math.random()*(colors.length - 1))

  return colors[index]
}



createRoot(document.getElementById('root')!).render(
  <>
    <div style={{
      width: 100,
      height: 100,
      backgroundColor: randColor()
    }}></div>
  </>
)

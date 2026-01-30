import React, { useState } from 'react'

function App() {
  const[color,setColor]=useState("white")
  return (
    <div>
      <h1>color picker</h1>
      <button onClick={()=>setColor("red")}>Red</button>

      <button onClick={()=>setColor("green")}>Green</button>

      <button onClick={()=>setColor("blue")}>blue</button>
      <div className='bgchange' style={{backgroundColor:color}}></div>
    </div>
  )
}
export default App


import { useState } from 'react'
import './App.css'

function App() {
  const [n,setN] = useState(0);
  function startGame(){
      setN(document.getElementById('n').value);
  }
  return (
    <>
      <h1>N-dim-tic-tac-toe</h1>
        
    </>
  )
}

export default App

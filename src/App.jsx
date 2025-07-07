
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
        <label htmlFor="">Select value of N: </label>
        <input type="number" id='n' />
        <button onClick={startGame}>Start game</button>
        {/* On clicking start game, I can render a html grid right ????? */}
      <br />
      {n}
    </>
  )
}

export default App

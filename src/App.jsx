import Grid from './Components/Grid.jsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [showGrid, setShowGrid] = useState(false);
  const [n,setN] = useState(0);
  const updateShowGrid = () => {
    let val = Number(document.getElementById('n').value);
    setN(val);
    console.log(n);
    setShowGrid(true);
  }
  return (
    <>
      <h1 className='heading'>N-dim-tic-tac-toe</h1>
      <div className='container'>
        <input type="number" id='n' className='input' />
      </div>
      <div className='container'>
        <button onClick={updateShowGrid} className='play-button'>Play</button>
      </div>
      <div className='other'>
        {showGrid && <Grid size={n}  />}
      </div>
      
    </>
  );
}

export default App

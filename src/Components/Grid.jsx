import { useEffect, useState } from "react";
function Grid(props) {
    //need to add a reset button to this as well
    //to check for winning criteria, check all rows, all cols,both diagonals
    const [turn, setTurn] = useState(1);
    const [n, setN] = useState(props.size);
    const symbols = ['', 'O', 'X'];
    const colors = ["", "#E2CB1D", "#1D34E2"];
    const updateAndSet = (e) => {
        if(e.target.innerText === ""){
            e.target.innerText = symbols[turn];
            e.target.onclick = null;
            e.target.style.color = colors[turn];
            if(turn === 1) setTurn(2);
            else setTurn(1);
        }
    }
    useEffect(()=> {
        setN(props.size);
    })
    useEffect(()=> {
        document.querySelectorAll('.box').forEach(b => b.innerText = "");
        console.log("n changed");
        setTurn(t => 1);
    },[n])
    if(props.size > 15){
        return (
            <>Sorry, {props.size} is too big for me</>
        )
    }
    const arr = new Array(props.size).fill(0);

    return (
        <>
        <h1>Current turn: Player {turn}</h1>
        {arr.map((a,i) => <div key={i} className="row">
            {arr.map((a,i)=> <button key={i} className="box" onClick={updateAndSet} ></button>)}
        </div>)}
        </>
    )
}
export default Grid;
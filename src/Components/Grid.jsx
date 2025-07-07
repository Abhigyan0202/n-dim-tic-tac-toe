
function Grid(props) {
    if(props.size > 15){
        return (
            <>Sorry, {props.size} is too big for me</>
        )
    }
    const arr = new Array(props.size);
    for(let i=0;i<props.size;i++) arr[i] = i;
    console.log(arr);
    return (
        <>
        {arr.map((a,i) => <div key={i} className="row">
            {arr.map((a,i)=> <button key={i} className="box" >M</button>)}
        </div>)}
        </>
    )
}
export default Grid;
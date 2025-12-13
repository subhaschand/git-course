import './App.css'
import { useState } from "react"

function App() {

  const[count,setCount]=useState(0);


  function handleAdd(){
    setCount(s=>s+1);
  }
  function handleSub(){
    setCount(s=>s-1);
  }
  function handleReset(){
    setCount(0);
  }



  return(
    <>
    <h1 className='st'>COUNTING GAME</h1>
    <div className='divi'>
    <p className="name">COUNT:{count}</p>

    <button className="btn-add" onClick={handleAdd}>ADD</button>
    <button className="btn-sub" onClick={handleSub}>SUB</button>
    <button className="btn-reset" onClick={handleReset}>RESET</button>

    </div>
    </>

  );
  
}

export default App


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
    <div>
    <p className="name">COUNT:{count}</p>

    <button className="btn" onClick={handleAdd}>ADD</button>
    <button className="btn" onClick={handleSub}>SUB</button>
    <button className="btn" onClick={handleReset}>RESET</button>

    </div>
    </>

  );
  
}

export default App

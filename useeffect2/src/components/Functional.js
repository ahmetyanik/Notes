import React, { useEffect, useState } from 'react'

function Functional() {

    const [state,setState] = useState(0);

    useEffect(()=>{
        const etkilenmeyen = document.querySelector("#etkilenmeyen");
        etkilenmeyen.innerText = state;
    },[])

    useEffect(()=>{
        const etkilenen2 = document.querySelector("#etkilenen2");
        etkilenen2.innerText = state;
    },[state])

  return (
    <div style={{background:"green"}}>
        <h3>State:{state}</h3>
        <h3>Etkilenmeyen Eleman: <span id='etkilenmeyen'></span> </h3>
        <h3>Etkilenen Eleman: <span id='etkilenen2'></span> </h3>
        <button onClick={()=>setState(state + 1)}>Click</button>
    </div>
  )
}

export default Functional
import React, { useState } from 'react'

let UseStateExample2 = () => {
    
    
  let [color,setColor]=useState(false);
  return (
    <div>
        
        
        <button onClick={()=>{
            setColor(!color)
        }}>Change color</button>

    <h1 style={{
        backgroundColor:color? "red":"white",
    }
    }>This is color change </h1>

    </div>
  )
}
export default UseStateExample2
import React, { useState } from 'react'

let UseStateExample1 = () => {
    //let a= useState();
    // [x,y]=a
    
  let [state,setState]=useState(0);
  return (
    <div>
        <h1> Count:{state}</h1>
        <button onClick={()=>{
            setState(state+1);
        }}>Increment</button>

    </div>
  )
}
export default UseStateExample1
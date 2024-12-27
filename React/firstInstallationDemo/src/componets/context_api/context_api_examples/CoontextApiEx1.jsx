import React, { useContext } from 'react'
import { myContext } from '../AppContext'

const CoontextApiEx1 = () => {
    let data=useContext(myContext);
    console.log(data);
    let{state,setState}=data;

  return (
    <div>
        <h1>State:{state}</h1>
        <button onClick={()=>{setState(state+1)}}>Click</button>
    </div>
    
  )
}

export default CoontextApiEx1
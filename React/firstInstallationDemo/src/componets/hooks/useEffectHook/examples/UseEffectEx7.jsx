import React, { useEffect, useState } from 'react'
import UseEffectExDep7 from './UseEffectExDep7';

const UseEffectEx7 = () => {
   let[state,setState]=useState(false);
   let handleChange=()=>{
    setState(!state);
   }
  return (
    <div>
        <h1>Main Component</h1>
        <button className="bg-orange-500 rounded-md px-2 text-white" onClick={handleChange}>{state?"Removed Child Component":"Add Child"}</button>

        <div>
            {state?<UseEffectExDep7/>:"Click button to get child component"}
        </div>
    </div>

    
  )
}

export default UseEffectEx7
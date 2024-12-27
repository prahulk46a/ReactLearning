import React, { useEffect, useState } from 'react'

//Can Pass multiple dependencies If there is any change any of dependency value useEffect will get called. sequence of multiple dependencies doesn't matters
const UseEffectEx3 = () => {
    let [state,setState]=useState(0);
    let [state2,setState2]=useState(0);

    
    useEffect(()=>{
        console.log("States changed!");
    },[state,state2]);
  return (
    <div>
        <button onClick={()=>{setState(state+1)}} className='bg-purple-500 rounded-md p-2 text-white'>State1:{state}</button>
        <button onClick={()=>{setState2(state2+1)}} className='bg-purple-500 rounded-md p-2 text-white'>State2:{state2}</button>
    </div>
  )
}

export default UseEffectEx3
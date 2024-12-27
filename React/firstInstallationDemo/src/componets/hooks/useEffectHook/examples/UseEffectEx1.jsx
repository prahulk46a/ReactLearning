import React, { useEffect, useState } from 'react'

const UseEffectEx1 = () => {
    let [state,setState]=useState(0);
    //No dependency array added
    useEffect(()=>{
        console.log("Use  effect called multiple time as dependencies not added");
        console.log(state);
    })
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        <h1 className='font-serif text-3xl'>count : {state}</h1>
        <button onClick={()=>{setState(state+1)}} className='bg-purple-500 rounded-md p-2 text-white'>Increment</button>
    </div>
  )
}

export default UseEffectEx1
import React, { useState } from 'react'

const Task3 = () => {
    let [message,setMessage]=useState("");
    let handleChange=(e)=>{
        setMessage(e.target.value)
    }
  return (
    <div className='flex justify-center items-center  h-[100vh] flex-col gap-3'>
        <form className='p-2 w-[30vw] bg-slate-100  shadow-md rounded-md'>
            <h1 className='font-semibold text-2xl text-blue-950 p-1'>Enter message to display Below</h1>
            <input name='message' placeholder='Enter Message to display below' className=' w-[90%] h-10 my-2 p-4' onChange={handleChange}></input>
        </form>
        <div className='w-[30vw] bg-slate-200 p-2 text-blue-800 text-xl'> 
            <p className='p-2 max-h-72 overflow-y-auto'>{message}</p>
        </div>
    </div>
  )
}

export default Task3
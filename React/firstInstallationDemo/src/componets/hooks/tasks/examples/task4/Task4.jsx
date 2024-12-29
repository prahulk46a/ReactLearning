import React, { useState } from 'react'

const Task4 = () => {
    let[theme,setTheme]=useState(true);
    let handleTheme=()=>{
        setTheme(!theme)
    }

  return (
    <div >
        <div className='flex items-center justify-center  h-[100vh] flex-col gap-2 text-xl' style={theme?{background:"black",color:"white"}:{background:"white",color:"black"}}>
            <h1>Current theme:{theme?"Dark":"Light"}</h1>
            <button className='bg-purple-500 p-2 text-white rounded-md font-serif' onClick={handleTheme}>Click me</button>
        </div>
    </div>
  )
}

export default Task4
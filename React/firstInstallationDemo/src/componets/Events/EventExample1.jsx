import React from 'react'

const EventExample1 = () => {
    let demo=(name)=>{
        console.log(`Button Clicked by ${name}`);
    }
  return (
    <div className='flex items-stretch justify-center '>
        <button onClick={()=>{demo("Rahul")}} className='bg-indigo-500 rounded-md border-x-cyan-950 px-2 text-zinc-100'>Click</button>
    </div>
  )
}

export default EventExample1
import React from 'react'

const EventObjectEx2 = () => {
    let demo=(name)=>{
        console.log(`Clicked`);
    }
  return (
    <div className='flex items-center justify-center  h-[100vh]'>
        <button  onClick={(e)=>{demo("Rahul");e.target.textContent="Told you to not click!!🤡";e.target.style.backgroundColor="grey"; e.target.disabled="true"}} className='bg-indigo-500 rounded-md border-x-cyan-950 px-2 text-zinc-100'>Think Before you clicked</button>
    </div>
  )
}

export default EventObjectEx2
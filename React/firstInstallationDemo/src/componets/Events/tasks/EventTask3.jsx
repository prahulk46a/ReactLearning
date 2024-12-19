import React from 'react'

const EventTask3 = () => {
    let handleClick=()=>{
        alert("Ha! You thought you could outsmart React?");
    }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <button className='bg-purple-500 rounded-md text-yellow-200 font-bold p-2' onClick={(e)=>{console.log(e);handleClick()}}>Click Me</button>
    </div>
  )
}

export default EventTask3
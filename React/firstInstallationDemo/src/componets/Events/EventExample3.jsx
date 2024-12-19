import React, { useState } from 'react'

const EventExample3 = () => {
    let [userInput,setState]=useState("");
  return (
    <div>
        <form action=''>
            <input
            onChange={(e)=>{
                setState(e.target.value);
                console.log(userInput); //This in console will show async behavior 
            }}
            type="text"
            className='border-[1px] border-gray-700 w-[500px] h-[50px]'
            >         
            </input>
            <button className='bg-purple-500 rounded-md px-4 flex justify-center items-center text-white w-[50px] h-[50px]'>Click</button>
        </form>


        <p>{userInput}</p> {/* this can be used for search functionality */}

    </div>
  )
}

export default EventExample3
import React, { useState } from 'react'

const EventTask10 = () => {
  let [isRainbow,setIsRainbow]=useState(false);
  let handleChange=()=>{
    setIsRainbow(!isRainbow);
  }
  return (
    <div className='flex justify-center items-center h-screen flex-col bg-gray-100'> 
      <div
        className={`w-64 h-64 rounded-lg ${
          isRainbow ? "rainbow" : "bg-gray-300"
        }`}
      ></div>
      <button
        onClick={handleChange}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {isRainbow ? "Stop Rainbow" : "Start Rainbow"}
      </button>

      {isRainbow && (
        <p className="mt-4 text-gray-700 italic">
          The rainbow respects your vibe. 🌈
        </p>
      )}
      
    </div>
  )
}

export default EventTask10
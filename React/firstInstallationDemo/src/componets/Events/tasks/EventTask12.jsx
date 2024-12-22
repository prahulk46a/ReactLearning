import React, { useState } from 'react'

const EventTask12 = () => {
    const[isIdle,setIsIdle]=useState(false);
    const[timeoutId, setTimeoutId]=useState(null)
    const resetTimer = () => {
        // Clear the existing timeout if any
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
    
        // Hide the warning and set a new timeout
        setIsIdle(false);
        const newTimeoutId = setTimeout(() => {
          setIsIdle(true); // Show the warning after 5 seconds of inactivity
        }, 5000);
    
        setTimeoutId(newTimeoutId); // Save the timeout ID
      };
    
      return (
        <div
          onMouseMove={resetTimer}
          className="h-screen flex flex-col items-center justify-center bg-gray-100"
        >
          <p className="text-xl font-semibold">
            Move your mouse to keep React happy! 😊
          </p>
          {isIdle && (
            <p className="mt-4 text-red-600 font-bold">
              Hello? Are you there? React is getting lonely. 😢
            </p>
          )}
        </div>
      );
}

export default EventTask12
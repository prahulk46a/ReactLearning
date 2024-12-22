import React, { useState } from 'react'

const EventTask13 = () => {
    const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 500); 
  };

  return (
    <div className='flex justify-center items-center h-screen'>
        <div onMouseEnter={handleMouseEnter}
            className={`flex justify-center items-center text-white w-64 h-64 bg-blue-500 rounded-lg ${
                isShaking ? "shake" : ""
            }`}>
            {isShaking?<h1>Stop Tickling Me!!</h1>:""}
        </div>
    </div>
    
  );
}

export default EventTask13
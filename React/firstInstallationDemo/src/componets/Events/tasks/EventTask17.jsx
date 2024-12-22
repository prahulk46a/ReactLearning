import React, { useState } from 'react'

const EventTask17 = () => {
    const [bgColor, setBgColor] = useState("#ffffff"); // Initial background color

    const handleClick = () => {
      // Generate a random color in hexadecimal format
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setBgColor(randomColor); // Update the background color
    };
  
    return (
      <div className='flex justify-center items-center h-screen'>
            <div onClick={handleClick}
                style={{ backgroundColor: bgColor }}
                className="w-80 h-80 flex items-center justify-center rounded-lg shadow-lg cursor-pointer text-white text-xl font-bold"
                >I’m a chameleon, can’t catch me!

            </div>
      </div>
    );
}

export default EventTask17
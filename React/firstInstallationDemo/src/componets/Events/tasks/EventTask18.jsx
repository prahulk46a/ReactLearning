import React, { useState } from 'react'

const EventTask18 = () => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
      // Generate a random delay between 1 and 3 seconds
      const randomDelay = Math.floor(Math.random() * 2000) + 1000;
  
      setMessage(""); // Clear the message before showing the new one
  
      // Set a delayed sarcastic message
      setTimeout(() => {
        setMessage("Huh? Oh, sorry, I was on a break.");
      }, randomDelay);
    };
  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg cursor-pointer"
        >
          Click Me
        </button>
        {message && (
          <p className="mt-4 text-xl text-red-500 font-bold">
            {message}
          </p>
        )}
      </div>
    );
}

export default EventTask18
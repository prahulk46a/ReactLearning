import React, { useState } from 'react'

const EventTask15 = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative w-96 h-96 overflow-hidden rounded-lg transition duration-500 ${
            isHovered ? "unblur" : "blurred"
          }`}
        >
          <img
            src="https://developers.arcgis.com/javascript/latest/static/465e3b4a8306ecffd216812d45bd4caa/6e1f3/thumbnail.png" 
            alt="Treasure Map"
            className="w-full h-full object-cover"
          />
          <p className="absolute bottom-4 left-4 text-white text-lg bg-black bg-opacity-50 px-2 py-1 rounded">
            X marks the React component.
          </p>
        </div>
      </div>
    );
}

export default EventTask15
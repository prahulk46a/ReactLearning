import React, { useState } from 'react'

const EventTask16 = () => {
    const [isVisible, setIsVisible] = useState(false); // Tracks popup visibility
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Tracks popup position
  
    const handleContextMenu = (event) => {
      event.preventDefault(); // Prevent the default right-click menu
      setPosition({ x: event.pageX, y: event.pageY }); // Set the popup position
      setIsVisible(true); // Show the popup
    };
  
    const handleClick = () => {
      setIsVisible(false); // Hide the popup on left click
    };
  
    return (
      <div
        onContextMenu={handleContextMenu}
        onClick={handleClick}
        className="h-screen w-screen bg-gray-100 flex items-center justify-center"
      >
        <p className="text-lg font-semibold">
          Right-click anywhere to see a surprise!
        </p>
  
        {isVisible && (
          <div
            style={{
              top: position.y,
              left: position.x,
            }}
            className="absolute bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
          >
            Didn’t expect me, huh? 😎
          </div>
        )}
      </div>
    );
}

export default EventTask16
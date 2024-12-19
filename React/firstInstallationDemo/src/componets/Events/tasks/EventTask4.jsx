import React, { useState } from 'react'

const EventTask4 = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
  
    return (
      <div
        onMouseMove={handleMouseMove}
        className="w-screen h-screen bg-gray-800 text-white flex flex-col items-center justify-center"
      >
        {/* Spy Glass Banner */}
        <div className="fixed top-0 left-0 w-full bg-red-600 text-center py-2">
          <h1 className="text-lg font-bold">You’re being watched 👀</h1>
        </div>
  
        {/* Mouse Coordinates */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl">
            <span className="font-bold">X:</span> {position.x}
          </p>
          <p className="text-xl">
            <span className="font-bold">Y:</span> {position.y}
          </p>
        </div>
      </div>
    );
}

export default EventTask4
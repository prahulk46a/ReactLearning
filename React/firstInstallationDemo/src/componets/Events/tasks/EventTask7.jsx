import React, { useState } from 'react'

const EventTask7 = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="h-screen w-screen bg-gray-100 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dot */}
      <div
        className="absolute bg-blue-500 w-5 h-5 rounded-full pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
  
}

export default EventTask7
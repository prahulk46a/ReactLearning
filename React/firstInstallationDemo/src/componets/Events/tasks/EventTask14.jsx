import React, { useState } from 'react'

const EventTask14 = () => {
  const [bgColor, setBgColor] = useState("#ffffff"); // Initial background color

  const handleWheel = () => {
    // Generate a random color in hexadecimal format
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div
      onWheel={handleWheel}
      className="h-screen flex items-center justify-center bg-gray-100"
    >
      <div
        style={{ backgroundColor: bgColor }}
        className="w-64 h-64 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-lg cursor-pointer"
      >
        Scroll to change my vibe!
      </div>
    </div>
  );
}

export default EventTask14
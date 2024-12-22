import React, { useState } from 'react'

const EventTask20 = () => {
    const [message, setMessage] = useState("");
    const [bgColor, setBgColor] = useState("#ffffff"); // Default background color
  
    const handleMouseEnter = () => {
      setMessage("Cloudy vibes today.");
      setBgColor("#a0aec0"); // Cloudy gray color
    };
  
    const handleContextMenu = (event) => {
      event.preventDefault(); // Prevent the default right-click menu
      setMessage("Storm incoming!");
      setBgColor("#4a5568"); // Dark stormy color
    };
  
    const handleDoubleClick = () => {
      setMessage("Sunny and happy!");
      setBgColor("#fbd38d"); // Sunny yellow color
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onContextMenu={handleContextMenu}
        onDoubleClick={handleDoubleClick}
        className="w-96 h-96 flex items-center justify-center rounded-lg text-white font-semibold shadow-lg cursor-pointer"
        style={{ backgroundColor: bgColor }}
      >
        {message || "Interact with me!"}
      </div>
    );
}

export default EventTask20
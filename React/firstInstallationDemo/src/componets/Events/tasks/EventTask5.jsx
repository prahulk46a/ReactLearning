import React from 'react'

const EventTask5 = () => {
    const moveButton = (e) => {
        
        const container = e.target.offsetParent;
    
        
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
    
        
        const randomX = Math.random() * (containerWidth - e.target.offsetWidth); 
        const randomY = Math.random() * (containerHeight - e.target.offsetHeight); 
    
        
        e.target.style.position = "absolute";
        e.target.style.left = `${randomX}px`;
        e.target.style.top = `${randomY}px`;
      };
    
      return (
        <div className="relative w-screen h-screen bg-gray-200 overflow-hidden">
          <button
            onMouseEnter={moveButton} 
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg">
            Catch Me!
          </button>
        </div>
      );
}

export default EventTask5
import React from 'react'

const EventTask6 = () => {
    const handleShake = (e) => {
        const button = e.target;
    
        console.log(e);
        button.classList.add("shake");
    
        
        button.addEventListener("animationend", () => {
          button.classList.remove("shake");
        }, { once: true }); // Ensures the listener is removed after one execution
      };
    
      return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <button onClick={handleShake} className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg">
            Click Me to Shake!
          </button>
        </div>
      );
}

export default EventTask6
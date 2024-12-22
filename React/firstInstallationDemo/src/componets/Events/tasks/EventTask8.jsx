import React, { useState } from 'react'

const EventTask8 = () => {
    const [message, setMessage] = useState("");
    const [shakeIndex, setShakeIndex] = useState(null);
    const buttons = ["Button 1", "Button 2", "Correct Button", "Button 4"];
    
    let handleClick=(index)=>{
        if(buttons[index] === "Correct Button"){
            setMessage("You found the correct button! 🎉");
            setShakeIndex(null);
            
        }
        else{
            setMessage("Nope! Try harder!");
            setShakeIndex(index);
        }

        setTimeout(() => setShakeIndex(null), 500);
    }


  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <p className="mb-6 text-xl font-bold">{message}</p>
      <div className="flex space-x-4">
        {buttons.map((label, index) => (
          <button
            key={index}
            onClick={(e) => {console.log(e)
                handleClick(index)}
            }
            className={`bg-blue-500 text-white px-4 py-2 rounded transition-all ${
              shakeIndex === index ? "shake" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default EventTask8
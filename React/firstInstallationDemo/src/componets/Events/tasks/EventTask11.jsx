import React, { useState } from 'react'

const EventTask11 = () => {
    const [timeLeft, setTimeLeft] = useState(null); // Countdown timer
    const [status, setStatus] = useState(""); // "Defused", "BOOM!", or empty
  
    let timerInterval = null;
  
    const startTimer = () => {
      if (timeLeft !== null) return; // Prevent multiple timers
      setStatus("");
      setTimeLeft(10); // Set countdown to 10 seconds
  
      timerInterval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerInterval);
            setStatus("BOOM! 💥");
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    };
  
    const defuseBomb = () => {
      if (timeLeft !== null) {
        clearInterval(timerInterval);
        setStatus("Defused! 🎉");
        setTimeLeft(null);
      }
    };
  
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <button
          onClick={startTimer}
          onDoubleClick={defuseBomb}
          className="px-6 py-3 bg-red-500 text-white rounded-lg text-xl hover:bg-red-600"
        >
          {status || "Defuse the Bomb"}
        </button>
        {timeLeft !== null && (
          <p className="mt-4 text-2xl font-bold text-gray-800">{timeLeft}s left!</p>
        )}
        {status && (
          <p className="mt-4 text-xl italic text-gray-700">{status}</p>
        )}
      </div>
    );
}

export default EventTask11
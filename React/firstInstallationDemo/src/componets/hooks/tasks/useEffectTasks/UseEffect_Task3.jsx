import React, { useEffect, useState } from "react";

const UseEffect_Task3 = () => {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div>
      {timeLeft > 0 ? <p>Time left: {timeLeft}s</p> : <p>Time's up!</p>}
    </div>
  );
};

export default UseEffect_Task3;

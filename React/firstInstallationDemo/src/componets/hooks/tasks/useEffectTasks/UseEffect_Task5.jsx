import React, { useEffect, useState } from "react";

const UseEffect_Task5 = () => {
  const [color, setColor] = useState("#ffffff");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      style={{
        background: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
    </div>
  );
};

export default UseEffect_Task5;

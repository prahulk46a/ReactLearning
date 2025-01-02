import React, { useEffect, useState } from "react";

const UseEffect_Task2 = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        padding: "10px",
        background: "lightgray",
      }}
    >
      {`Width: ${dimensions.width}, Height: ${dimensions.height}`}
    </div>
  );
};

export default UseEffect_Task2;

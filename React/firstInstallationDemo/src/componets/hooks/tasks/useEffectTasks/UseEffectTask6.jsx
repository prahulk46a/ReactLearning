import React, { useEffect, useState } from "react";

const UseEffectTask6 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPosition((position / maxScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getColor = () => {
    if (scrollPosition < 50) return "green";
    if (scrollPosition < 80) return "yellow";
    return "red";
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "5px",
        width: `${scrollPosition}%`,
        background: getColor(),
      }}
    ></div>
  );
};

export default UseEffectTask6;

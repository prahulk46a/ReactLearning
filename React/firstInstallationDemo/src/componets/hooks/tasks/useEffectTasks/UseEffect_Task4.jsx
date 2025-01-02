import React, { useEffect, useState } from "react";

const UseEffect_Task4 = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.className = theme;

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default UseEffect_Task4;

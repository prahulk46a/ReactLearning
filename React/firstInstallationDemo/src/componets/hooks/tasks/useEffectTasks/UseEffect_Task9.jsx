import React, { useEffect, useState } from "react";

const UseEffect_Task9 = () => {
  const [input, setInput] = useState(
    () => localStorage.getItem("formData") || ""
  );

  useEffect(() => {
    localStorage.setItem("formData", input);
  }, [input]);

  const handleClear = () => {
    setInput("");
    localStorage.removeItem("formData");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleClear}>Clear Form</button>
    </div>
  );
};

export default UseEffect_Task9;

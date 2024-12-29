import React, { useState } from "react";

const Task8 = () => {
  const [text, setText] = useState("");
  const maxCharacters = 200;

  const handleChange = (e) => {
    if (e.target.value.length <= maxCharacters) {
      setText(e.target.value);
    }
  };

  const getColor = () => {
    const threshold = 0.9 * maxCharacters; // 90% of the limit
    return text.length >= threshold ? "red" : "black";
  };
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <input
        value={text}
        onChange={handleChange}
        style={{
          width: "100%",
          fontSize: "16px",
          padding: "8px",
          boxSizing: "border-box",
          background: "#e4e8ed",
        }}
        placeholder="Type your text here..."
      ></input>
      <div
        style={{
          textAlign: "right",
          fontSize: "14px",
          color: getColor(),
          marginTop: "4px",
        }}
      >
        Characters: {text.length}/{maxCharacters}
      </div>
    </div>
  );
};

export default Task8;

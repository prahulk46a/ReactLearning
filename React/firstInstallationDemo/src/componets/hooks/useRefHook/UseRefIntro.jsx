import React, { useRef } from "react";

const UseRefIntro = () => {
  let heading = useRef();
  let handleClick = () => {
    heading.current.style.background = "#ffcc66";
  };
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <h1 ref={heading}>This is heading</h1>
      <button
        className="text-white bg-purple-500 rounded-md px-2"
        onClick={handleClick}
      >
        ClickMe
      </button>
    </div>
  );
};

export default UseRefIntro;

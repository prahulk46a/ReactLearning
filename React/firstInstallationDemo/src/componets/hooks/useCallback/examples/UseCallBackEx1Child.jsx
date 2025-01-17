import { Button } from "bootstrap";
import React from "react";

const UseCallBackEx1Child = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col text-3xl">
      Child
      <button className="px-4 bg-purple-500 rounded-md text-white">
        Click
      </button>
    </div>
  );
};

//React.memo is a higher-order component (HOC) in React that optimizes the rendering of functional components by preventing unnecessary re-renders.
//It works by memoizing the result of the component's last render and reusing it if the props haven't changed.
export default React.memo(UseCallBackEx1Child);

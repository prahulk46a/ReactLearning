import React, { useState } from "react";
import UseCallBackEx1Child from "./UseCallBackEx1Child";
import Button from "react-bootstrap/Button";

const UseCallbackEx1 = () => {
  let [state, setState] = useState();
  // Problem => On every state change  this function recreated
  let funct = () => {
    console.log("hello");
  };

  // Solution => Memoize the function so it doesn't get recreated on every render
  // let funct = useCallback(() => {
  //   console.log("hello");
  // }, []);

  return (
    <div className="flex justify-center items-center flex-col my-6 text-3xl">
      Parent
      <UseCallBackEx1Child prop={funct} />
      {/*funct recreated hence props changes and child rerenders*/}
    </div>
  );
};

export default UseCallbackEx1;

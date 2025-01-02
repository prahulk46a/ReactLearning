import React, { useState } from "react";
import HocEx1Child from "./HocEx1Child";

const HocEx1 = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  console.log("parent");
  return (
    <div>
      <h1>Parent</h1>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
        onMouseOver={() => {
          setCount(count + 1);
        }}
        className="bg-purple-500 px-4 rounded-md text-white"
      >
        State:{count}
      </button>
      {/* On every state updation this parent component will rerender also child
      of this component rerenders this causes performance issue. //This is
      solved using React.memo. child is get rerender only when props of child get changed else no rerender will happen */}
      <HocEx1Child props={count2} />
    </div>
  );
};

export default HocEx1;

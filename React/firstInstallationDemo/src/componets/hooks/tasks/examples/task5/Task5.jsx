import React, { useState } from "react";

const Task5 = (InitialValue) => {
  const [count, setCount] = useState(0);
  const [stepSize, setStepSize] = useState(1);

  const handleStepSizeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setStepSize(isNaN(value) ? 1 : value);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + stepSize);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - stepSize);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="max-w-sm mx-auto p-4 bg-gray-100 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Step Counter Incrementor</h1>
        <div className="mb-4">
          <label htmlFor="step-size" className="block text-lg font-medium mb-2">
            Step Size:
          </label>
          <input
            id="step-size"
            type="number"
            value={stepSize}
            onChange={handleStepSizeChange}
            className="w-full px-3 py-2 border rounded-lg text-lg"
            min="1"
          />
        </div>
        <div className="mb-4 text-2xl font-bold">Count: {count}</div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task5;

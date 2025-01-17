import React, { useReducer } from "react";

const UseReducerExample2 = () => {
  let initialState = {
    count: 0,
  }; //In order to perform multiple task we define initial state as object.

  let reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload }; //compulsory need to return to update state

      case "decrement":
        return { ...state, count: state.count - action.payload };

      default:
        return state;
        break;
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button
        className="bg-purple-500 text-white rounded-md p-2 mx-3 "
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        Increment by 1
      </button>

      <button
        className="bg-purple-500 text-white rounded-md p-2 mx-3  "
        onClick={() => dispatch({ type: "decrement", payload: 1 })} //This dispatch function parameters are actions to reducer func we use payloads to send data to reducer function along with types
      >
        Decrement by 1
      </button>
    </div>
  );
};

export default UseReducerExample2;

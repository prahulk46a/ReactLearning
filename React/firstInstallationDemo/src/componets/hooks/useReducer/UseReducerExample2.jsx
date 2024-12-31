import React, { useReducer } from "react";

const UseReducerExample2 = () => {
  let initialState = 0; //In order to perform multiple task we define initial state as object.
  let [state, dispatch] = useReducer(reducer, initialState);
  return <div></div>;
};

export default UseReducerExample2;

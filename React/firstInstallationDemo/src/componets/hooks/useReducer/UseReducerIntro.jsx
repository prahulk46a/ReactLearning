import React, { useReducer } from "react";

const UseReducerIntro = () => {
  let initialState = 0;
  //by default react passes 2 argument to this funct 1.state 2.action which is passed while calling dispatch function (button onclick) custom function
  let reducer = (state, action) => {
    switch (action) {
      case "add":
        return state + 1; //must return to update state value

      case "sub":
        if (state == 0) {
          return state;
        }
        return state - 1;

      case "mul":
        return state * 2;

      default:
        return state;
    }
  };

  //  let [state,setState]=useState({/*internally func declared,*/} initialState )
  let [state, dispatch] = useReducer(reducer, initialState); //Similar to useState.Here you can write custom logic for reduce function
  return (
    <div>
      <button
        className="bg-purple-500 text-white rounded-md text-xl p-2 m-2"
        onClick={() => {
          //setState()
          dispatch("add"); //this is passed to dispatch funct in 2nd parameter as 1st parameter react passes by default state
        }}
      >
        Add:{state}
      </button>
      <button
        className="bg-purple-500 text-white rounded-md text-xl p-2 m-2"
        onClick={() => {
          dispatch("sub");
        }}
      >
        Sub:{state}
      </button>
      <button
        className="bg-purple-500 text-white rounded-md text-xl p-2 m-2"
        onClick={() => {
          dispatch("mul");
        }}
      >
        mul:{state}
      </button>
      <button
        className="bg-purple-500 text-white rounded-md text-xl p-2 m-2"
        onClick={() => {
          dispatch("div");
        }}
      >
        State:{state}
      </button>
    </div>
  );
};

export default UseReducerIntro;

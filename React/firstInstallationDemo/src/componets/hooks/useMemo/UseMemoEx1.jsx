import React, { useMemo, useState } from "react";

const UseMemoEx1 = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  let checkCount1 = () => {
    let i = 0;
    //time consuming activity
    while (i < 10000000000) {
      i++;
    }
    return count1 % 2 ? "Even" : "Odd";
  };

  // syntax=>  usememo=(callback function which takes time,on what state change that function get called)
  let memoizedCount1 = useMemo(checkCount1, [count1]);

  let checkCount2 = () => {
    return count2 % 2 ? "Even" : "Odd";
  };

  //UseMemo=> What ie will do=> Whenever there is any time taking activity that affects entire application unnecessarily in this ex. whenever change in count 1 occurs while loop take some delay

  return (
    <div>
      <button
        className="bg-purple-500 text-white rounded-md px-3"
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        {/* count1:{count1} {checkCount1()}  this is problematic */}
        count1:{count1} {memoizedCount1}
      </button>
      <button
        className="bg-purple-500 text-white rounded-md px-3"
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        count2:{count2} {checkCount2()}
      </button>
    </div>
  );
};

export default UseMemoEx1;

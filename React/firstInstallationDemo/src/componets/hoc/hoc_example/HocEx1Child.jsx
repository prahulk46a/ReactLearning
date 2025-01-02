import React from "react";

const HocEx1Child = (props) => {
  console.log(props);
  // console.log(child);
  return (
    <div>
      <h1>Child</h1>
    </div>
  );
};

//This is called hoc as inside memo another function is there.This process is called as memoization as react will remember.
export default React.memo(HocEx1Child);

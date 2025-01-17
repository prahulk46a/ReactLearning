import React from "react";
import HocChildEx2 from "./HocChildEx2";
import Loader from "./Loader";

let ChildWithLoader = Loader(HocChildEx2);
const HocEx2 = () => {
  let a = 10;
  let b = 20;
  let c = 30;
  let d = 40;

  return (
    <div>
      <p>Parent</p>
      <br /> <br /> <hr /> <br />
      <ChildWithLoader props={10} />
    </div>
  );
};

export default HocEx2;

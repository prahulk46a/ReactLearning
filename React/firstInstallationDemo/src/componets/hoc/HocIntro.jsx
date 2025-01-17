import React from "react";
import HocEx1 from "./hoc_example/HocEx1";
import HocEx2 from "./hoc_example/example2/HocEx2";

const HocIntro = () => {
  return (
    <div>
      {/* <HocEx1></HocEx1> */}
      <HocEx2 />
    </div>
  );
};

export default HocIntro;

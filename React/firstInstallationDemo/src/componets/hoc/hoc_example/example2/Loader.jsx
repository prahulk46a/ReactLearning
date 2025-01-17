import React, { useState } from "react";
import CustomLoader from "./CustomLoader";

const Loader = (Comp) => {
  return (props) => {
    let [state, setState] = useState(true);
    setTimeout(() => {
      setState(false);
    }, 2000);
    if (state) {
      return <CustomLoader></CustomLoader>;
    }
    return <Comp props={{ ...props }} />;
  };
};

export default Loader;

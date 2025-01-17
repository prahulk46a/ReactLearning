import MainDiv from "./Example2_components/MainDiv";

// Example1
// let App=()=> {
//   return (
//     <div id="app">
//         <div id="landing_page">Landing Page</div>
//         <div id="webinar">Webinar</div>
//         <MainDiv/>
//     </div>
//   )
// }

// Example2
// let App=()=> {
//     return (
//       <div id="app">
//           <MainDiv></MainDiv>
//       </div>
//     )
// }
// export default App;

// Example3
// import React from 'react'
// import Home from "./Example3_Ecom/Home";

// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// import Signup from "./Example4_signIn.jsx/Signup";

// const App = () => {
//   return (
//     <div>
//       <Signup></Signup>
//     </div>
//   )
// }

// export default App

import React from "react";
import Todo from "./Example5_Todolist/Todo";
import UseCallbackEx1 from "../../firstInstallationDemo/src/componets/hooks/useCallback/examples/UseCallbackEx1";
import UseCallbackIntro from "../../firstInstallationDemo/src/componets/hooks/useCallback/UseCallbackIntro";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

const App = () => {
  return (
    <div>
      <Todo />
    </div>
  );
};

export default App;

import MainDiv from "./Example2_components/MainDiv";

//Example1
// let App=()=> {
//   return (
//     <div id="app">
//         <div id="landing_page">Landing Page</div>
//         <div id="webinar">Webinar</div>
//         <MainDiv/>
//     </div>
//   )
// }


//Example2
let App=()=> {
    return (
      <div id="app">
          <MainDiv></MainDiv>
      </div>
    )
}
export default App;
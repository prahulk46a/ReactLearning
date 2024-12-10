// import { StrictMode } from 'react'=> It is used to double check 
import { createRoot } from 'react-dom/client'
import './index.css'
import ClassBasedComp from './componets/types_of_components/ClassBasedComp.jsx'
import UseStateIntro from './componets/hooks/useStateHook/useStateIntro'
// import JsxRules from './componets/jsx_intro/jsx_rules/JsxRules.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    {/* <JsxRules></JsxRules> */}
    {/* <ClassBasedComp/> */}
    <UseStateIntro/>

  </div>
)

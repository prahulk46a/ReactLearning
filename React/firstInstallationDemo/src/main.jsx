// import { StrictMode } from 'react'=> It is used to double check 
import { createRoot } from 'react-dom/client'
import './index.css'
// import ClassBasedComp from './componets/types_of_components/ClassBasedComp.jsx'
import PropsIntro from './componets/props/PropsIntro'
import UseStateIntro from './componets/hooks/useStateHook/UseStateIntro'
import UseEffectIntro from './componets/hooks/useEffectHook/UseEffectIntro'
// import JsxRules from './componets/jsx_intro/jsx_rules/JsxRules.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    {/* <JsxRules></JsxRules> */}
    {/* <ClassBasedComp/> */}
    {/* <UseStateIntro/> */}
    <PropsIntro/>
    {/* <UseEffectIntro/> */}

  </div>
)

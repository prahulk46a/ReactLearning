// import { StrictMode } from 'react'=> It is used to double check 
import { createRoot } from 'react-dom/client'
import './index.css'
// import ClassBasedComp from './componets/types_of_components/ClassBasedComp.jsx'
import PropsIntro from './componets/props/PropsIntro'
import UseStateIntro from './componets/hooks/useStateHook/UseStateIntro'
import UseEffectIntro from './componets/hooks/useEffectHook/UseEffectIntro'
import ModuleCssEx from './componets/ModuleBasedCssExample/ModuleCssEx'
import Home from './componets/conditionalRendering/Home'
import Main from './componets/conditionalRendering/example1/Main'
import MainPage from './componets/conditionalRendering/example2/MainPage'
import EventIntro from './componets/Events/EventIntro'
// import JsxRules from './componets/jsx_intro/jsx_rules/JsxRules.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    {/* <JsxRules></JsxRules> */}
    {/* <ClassBasedComp/> */}
    {/* <UseStateIntro/> */}
    {/* <PropsIntro/> */}
    {/* <UseEffectIntro/> */}
    {/* <ModuleCssEx/> */}
    {/* <Home/> */}
    {/* <Main/> */}
    {/* <MainPage/> */}
    <EventIntro/>
  </div>
)

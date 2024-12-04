// import { StrictMode } from 'react'=> It is used to double check 
import { createRoot } from 'react-dom/client'
import './index.css'
import JsxRules from './componets/jsx_intro/jsx_rules/JsxRules.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <JsxRules></JsxRules>
  </div>
)

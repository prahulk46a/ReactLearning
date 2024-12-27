import React from 'react'
import AppContext from './AppContext'
import CoontextApiEx1 from './context_api_examples/CoontextApiEx1'

const ContextApiIntro = () => {
  return (
    <AppContext>
      <CoontextApiEx1/>{/*this is children in app context so all body that we return from the ex1 that will get passed as a prop.child and that entire body component will get rendered */} 
    </AppContext>
  )
}

export default ContextApiIntro
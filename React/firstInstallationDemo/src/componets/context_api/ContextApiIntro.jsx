import React from 'react'
import AppContext from './AppContext'
import CoontextApiEx1 from './context_api_examples/CoontextApiEx1'
import AppContext2 from './AppContext2'
import ContextEx2 from './context_api_examples/ContextEx2'

const ContextApiIntro = () => {
  return (
    // <AppContext>
    //   <CoontextApiEx1/>{/*this is children in app context so all body that we return from the ex1 that will get passed as a prop.child and that entire body component will get rendered */} 
    // </AppContext>

    <AppContext2>
      <ContextEx2/>
    </AppContext2>

  )
}

export default ContextApiIntro
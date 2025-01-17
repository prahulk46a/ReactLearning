import React, { useState } from 'react'
import { createContext } from 'react'

export let myContext=createContext(); // Initializes a new Context object for managing the state.
const AppContext = ({children}) => {  //
  let[state,setState]=useState(0)     // Count State Creation=> So what we want we have to update frequently state and we want to make changes into dependant one's so we took this useState.but for all components that are child of this app context needs this state so we added this state into context with values
  return (
    <div>
      {/*All things wrapped inside react jsx component will be prop.children for child component*/}
      <myContext.Provider value={{state,setState}}> {/* provide state and setState into context*/}
        {children}        
      </myContext.Provider>
    </div>
  )
}

export default AppContext
import React, { createContext } from 'react'

export let context = createContext()
  
const AppContext2 = (props)=>{
    let {Provider} = context
    let data = [
        {
        name : "abc",
        age : 23
        },
        {
        name : "xyz",
        age : 23
        },
        {
        name : "lmn",
        age : 23
        },
        {
        name : "pqr",
        age : 23
        },
    ]
    return(
        <Provider value={data}>{props.children}</Provider>
    )
}

export default AppContext2
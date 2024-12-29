import { useState } from "react"

const useVisibility=()=>{
    let [visibility,setVisibility]=useState(true);
    let changeVisibility=()=>{
        setVisibility(!visibility);
    }
    return {visibility,changeVisibility}
}
export default useVisibility;
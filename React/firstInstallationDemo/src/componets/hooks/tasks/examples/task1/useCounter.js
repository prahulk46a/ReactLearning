import { useState } from "react"

const useCounter=(initialValue=0)=>{
    let [state,setState]=useState(initialValue);
    let increment=()=>{
        setState(state+1);
    }
    let decrement=()=>{
        if(state>0){
            setState(state-1);
        }
    }
    let reset=()=>{
        setState(initialValue);
    }
    return { state, increment, decrement, reset };

}
export default useCounter;
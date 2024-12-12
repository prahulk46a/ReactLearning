import React, { useState } from 'react'

let UseStateExample1 = () => {
    //let a= useState();
    // [x,y]=a
    
    const [state, setState] = useState(0);

    const handleClick = () => {
        setState(state+1);
        setState(pre => pre + 2);
        setState(pre => pre + 3);
    };

    return (
        <div>
            <h1>Current State: {state}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
export default UseStateExample1

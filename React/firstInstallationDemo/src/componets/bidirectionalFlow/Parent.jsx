import React from 'react'
import Child from './Child';

const Parent = () => {
    let demo=(a)=>{
        console.log(a);
    }
  return (
    <div>
        <Child prop={demo}/>
    </div>
  )
}

export default Parent
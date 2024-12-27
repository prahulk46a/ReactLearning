import React from 'react'

const CounterProps = (prop) => {
    console.log(prop);
    
  return (
    <div> 
        <button onClick={()=>{
            prop.data2();
        }}>Update Count</button>

    </div>
  )
}

export default CounterProps;
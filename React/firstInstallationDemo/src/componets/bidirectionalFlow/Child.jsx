import React from 'react'

const Child = (prop) => {
    console.log(prop);
    let a=10;
  return (
    <div>
        {prop.prop(a)}
    </div>
  )
}

export default Child
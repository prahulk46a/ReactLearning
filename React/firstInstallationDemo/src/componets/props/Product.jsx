import React from 'react'
//Default props.=> At any point if we dont get any data then we can use default prop for such situations

const Product = ({name,Age,RollNo="46"}) => {
  return (
    <div>
      {<h1>Hello,{name} is your Age is {Age}? If yes then your  roll no is {RollNo}</h1>}
    </div>
  )
}

export default Product
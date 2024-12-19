import React from 'react'

const Error = () => {
  let theme="light";
  return (
    <div>
        <h1 style={theme==light?{}:{}}>Error!!</h1>
    </div>
  )
}

export default Error
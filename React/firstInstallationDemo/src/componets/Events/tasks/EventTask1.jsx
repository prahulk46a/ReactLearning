import React from 'react'

const EventTask1 = () => {
  return (
    <div className='bg-white text-white flex items-center justify-center h-[100vh] font-bold ' onDoubleClick={(e)=>{e.target.style.color='Black'}}>
        <h>"Shh! I'm a React developer undercover!"</h>
    </div>
  )
}

export default EventTask1

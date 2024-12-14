import React, { useState } from 'react'
import Header from './Header'

const Home = () => {
    const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
        <Header data={{isLoggedIn,setIsLoggedIn}}/>
    </div>
  )
}

export default Home
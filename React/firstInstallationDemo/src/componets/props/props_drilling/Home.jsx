import React from 'react'
import Header from './Header'

const Home = () => {
    let name="Rahul"
  return (
    <div> 
        <Header data={name}/>
    </div>
  )
}

export default Home
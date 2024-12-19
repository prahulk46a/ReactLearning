import React from 'react'
import Error from './Error'

const Example1 = () => {
    // localStorage.setItem('user1',"Pass@123");
    let user=localStorage.getItem('user1')
    // console.log(user);
    if(user=="Pass@123"){
        return <h1>Welcome User</h1>
    }
    else{
        return <Error/>
    }
 
}

export default Example1
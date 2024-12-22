import React, { useState } from 'react'

const EventExample5 = () => {
  let[state,setState]=useState({userName:"",password:"",id:Date.now(),users:[]})
  let {userName,password,users}=state;
  const handleChange = (e) => {
    let {name,value}=e.target;
    setState({
      ...state,[name]: value          
    } );                                              
    console.log(state);                               
  };

  let handleSubmit=(e)=>{
      e.preventDefault(); //Prevents refresh behavior of obj
      let tempObj={
        userName:state.userName.toLowerCase(),  
        password:state.password,
        id:state.id
      }
      setState({userName:"",password:"",id:Date.now(),users:[...users,tempObj]});
  }
  return (
    <div className="p-10"> 
        <h1 className='text-orange-400 text-4xl font-extrabold'>Signup Form</h1>
        <br></br>
        <form action="" onSubmit={handleSubmit}  >
            <input
            type="text"
            className='border-[1px] border-gray-700 w-[400px] h-[50px] p-5'
            name='userName'
            placeholder='Enter UserName'
            value={state.userName}
            onChange={handleChange}
            required
            />
            <br />
            <br/>
            <input
            type="text"
            className='border-[1px] border-gray-700 w-[400px] h-[50px] p-5'
            name='password'
            placeholder='Enter password'
            value={state.password}
            onChange={handleChange}
            required
            />
            
            <br/>          
            <br/>                                                                                                                                   
            <button className='bg-purple-500 rounded-md px-4 flex justify-center border-[1px] border-black items-center text-white w-[200px] h-[50px]' >Click Me!</button>
        </form>
        <hr className='h-px my-8  border-2 dark:bg-gray-700'></hr>
        <div className='flex justify-center items-center bg-gray-100 w-[20%] p-2'>SIGNED-UP USERS</div>
        <br></br>
        <main className='flex flex-wrap p-10 bg-slate-100 '>
        {state.users.length > 0 ? (
          state.users.map((val, i) => (
            <div
              key={i}
              className="w-[19%] h-[20vh] p-3 m-2 bg-orange-500 rounded-md shadow-md"
            >
              <h1 className="text-xl text-white font-bold">{val.userName}</h1>
              <h1 className="text-sm text-gray-100">Password: {val.password}</h1>
              <h1 className="text-sm text-gray-100">ID: {val.id}</h1>
              <div className="mt-2 flex justify-center">
                <button className="px-2 py-1 mx-2 bg-green-600 text-white text-sm rounded-md">
                  Update
                </button>
                <button className="px-2 py-1 bg-red-600 text-white text-sm rounded-md" onClick={()=>{}}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No users logged in</p>
        )}
        </main>
    </div>
  )
}

export default EventExample5;
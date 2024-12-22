import React, { useState } from 'react';

//This is how you can use the event in the input field and get the value of the input field
const EventExample4 = () => {
  let [state, setState] = useState({ userName: "", password: "" });

  const handleChange = (e) => {
    setState({
      ...state,[e.target.name]: e.target.value        // e.target.name if we dont spread then it will handle 1 only at a time as current event will be 1 input only  
    } );                                              // Why spread=> Spread will spread all fields in 1st arg. it will override whatever value we are typing.Ex. obj={a:"",} obj.a=10 obj.b=20 it will override now here state{{userName:"",pass:""}, e.target.val(username)} so here e.target.val will get updated as username which on change get override username that we spread 
    console.log(state);                               // set previous one as well as new one too
  };

  // let obj = {
  //   a : 10,        a:30 b:20
  //   b : 20, 
  //   a : 30
  // }
  // console.log(obj);
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] bg-gray-300'>
      <form action='' className='flex flex-col justify-center items-center h-[70vh] w-[50vw] border-[2px] bg-white border-black'>
        <input
          type="text"
          className='border-[1px] border-gray-700 w-[400px] h-[50px]'
          name='userName'
          placeholder='Enter User-Name'
          required
          value={state.userName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className='border-[1px] border-gray-700 w-[400px] h-[50px]'
          name='password'
          placeholder='Enter password'
          required
          value={state.password}
          onChange={handleChange}
        />
        <br/>
        <button className='bg-purple-500 rounded-md px-4 flex justify-center border-[1px] border-black items-center text-white w-[200px] h-[50px]'>Click Me!</button>
      </form>
    </div>
  );
};

export default EventExample4;
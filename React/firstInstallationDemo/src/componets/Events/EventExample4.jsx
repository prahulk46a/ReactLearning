import React, { useState } from 'react';

//This is how you can use the event in the input field and get the value of the input field
const EventExample4 = () => {
  let [state, setState] = useState({ userName: "", password: "" });

  const handleChange = (e) => {
    setState(prevState => ({
      ...prevState,[e.target.name]: e.target.value
    }));
    console.log(state);
  };

  return (
    <div>
      <form action=''>
        <input
          type="text"
          className='border-[1px] border-gray-700 w-[500px] h-[50px]'
          name='userName'
          placeholder='Enter User-Name'
          value={state.userName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className='border-[1px] border-gray-700 w-[500px] h-[50px]'
          name='password'
          placeholder='Enter password'
          value={state.password}
          onChange={handleChange}
        />
        <button className='bg-purple-500 rounded-md px-4 flex justify-center items-center text-white w-[50px] h-[50px]'>Click</button>
      </form>
    </div>
  );
};

export default EventExample4;
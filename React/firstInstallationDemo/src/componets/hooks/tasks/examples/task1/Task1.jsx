import useCounter from './useCounter';
const Task1 = () => {
  let {state,increment,decrement,reset}=useCounter();  
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <h1 className='text-3xl font-bold font-semibold'>Count:{state}</h1> 
      <br></br> 
      <button className="bg-purple-500 text-white rounded-md text-xl p-2 m-2" onClick={increment}>Increment</button>
      <button className="bg-purple-500 text-white rounded-md text-xl p-2 m-2" disabled={state==0} onClick={decrement}>Decrement</button>
      <button className="bg-purple-500 text-white rounded-md text-xl p-2 m-2" onClick={reset}>Reset</button>
    </div>
  )
}

export default Task1
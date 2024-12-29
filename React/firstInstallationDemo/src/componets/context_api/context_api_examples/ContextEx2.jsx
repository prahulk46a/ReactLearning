import React, { useContext } from 'react'
import { context } from '../AppContext2'

const ContextEx2 = () => {
    let data = useContext(context)
    console.log(data)
  return (
    <div>
        <table className='border-[1px] border-black p-3'>
            <thead>
                <tr className='border-[1px] border-black p-3'>
                    <th className='border-[1px] border-black p-3'>Name</th>
                    <th className='border-[1px] border-black p-3'>Age</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(data)>0 && data.map((val, i)=>{
                    return (
                        <tr key={i} className='border-[1px] border-black p-3'>
                            <td className='border-[1px] border-black p-3'>{val.name}</td>
                            <td className='border-[1px] border-black p-3'>{val.age}</td>
                        </tr>
                    )
                })}
            </tbody>
            
        </table>
    </div>
  )
}

export default ContextEx2
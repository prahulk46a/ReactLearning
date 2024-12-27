import React, { useEffect, useState } from 'react'

const UseEffectEx2 = () => {
    let [price,setPrice]=useState(0);
    // decency array passed but no dependencies added. will use this syntax mostly for calling api's so that api's will not get called unnecessarily .
    useEffect(()=>{
        async function fetching(){
            let jsonData= await fetch('https://dummyjson.com/products');
            let data=await jsonData.json();
            console.log(data);
            console.log("This use effect will get called only once as dependencies array has no dependency so no state is changing.");
        }
        fetching();
    },[]);


  return (
    <div>
        
    </div>
  )
}

export default UseEffectEx2
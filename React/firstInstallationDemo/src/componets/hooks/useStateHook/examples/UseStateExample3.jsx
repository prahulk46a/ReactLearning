import React from 'react'

let UseStateExample3 = () => {
let [shape,setShape]=useState(false);
  return (
    <div>
        <button onClick={()=>{
            setShape(!shape);
        }}>change shape</button>

        <div id="div1" style={{
                borderRadius:shape?"50%":"0",
            }
        }>
        </div>

    </div>
  )
}

export default  UseStateExample3;
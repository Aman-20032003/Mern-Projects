import { useState } from "react";

const Counter=()=>{
    const [count,setCount]=useState(15);
    return (
        <div>
            <p>counter componenet- {count}</p>
            <h6>Number is {count%2===0?"even":"odd"}</h6>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </div>
    )

}
export default Counter;
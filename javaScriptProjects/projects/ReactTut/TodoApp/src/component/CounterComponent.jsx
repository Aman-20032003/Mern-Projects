import { useState } from "react";

const Counter=()=>{
    const [count,setCount]=useState[15];
    return (
        <div>
            <p>counter componenet- {count}</p>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </div>
    )

}
export default Counter;
import React from "react";
import { useEffect,useState } from "react";

const MyComponent=()=>{
  const[count,setCount]=useState(0);
 useEffect(()=>{
console.log("count is updated.........");
  return function () {
    console.log("returning count ", count);
    
  }
  },[count])
    return(
        <div>
       <h3>count is {count}</h3>
       <button onClick={()=>setCount(count+1)}>increment</button>
       </div>
    )
}
export default MyComponent;
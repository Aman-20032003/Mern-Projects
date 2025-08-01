import React from "react";
import { useContext } from "react";
import {CounterContext } from "./Context/Counter";
const Counter=()=>{
    const counterContext= useContext(CounterContext);
    return (
     <div className="context-api">
    <button onClick={()=>counterContext.setCount(counterContext.count+1)}>increment</button>

     <button onClick={()=>counterContext.setCount(counterContext.count-1)}>decrement</button>
     </div>

    )
}
 export default Counter;
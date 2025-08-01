import React from "react";
import { useEffect,useState } from "react";

const Timer=()=>{
const[time, setTime]=useState(0);
useEffect(()=>{
    console.log("Addingnew interval");
    const timer= setInterval(setTime(time+1),1000);
    return function(){
        clearInterval(timer);
        console.log("clear old interval");
        
    }
},[time])

return(
    <div>
     <h1>Stopwatch</h1>
     <p>current time is {time}</p>

    </div>

)
}
export default Timer;
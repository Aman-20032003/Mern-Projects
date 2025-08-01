import {React,createContext, useContext, useState} from "react";
import { getWheatherDataForCity ,getWheatherDataForLocation} from "../api";

export const WheatherContext= createContext(null);
export const useWheather=()=>{
    return useContext(WheatherContext);
}
export  const WheatherProvider=(props)=>{
    const [data,setdData]=useState(null);
   const [searchCity, setSearchCity] = useState("");
    const fetchData=async()=>{
        const response= await getWheatherDataForCity(searchCity);
        setdData(response); 
    }
return <WheatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,fetchCurrentUserLocationData}}>{props.children}</WheatherContext.Provider>
}

export const fetchCurrentUserLocationData=()=>{
    navigator.geolocation.getCurrentPosition((postion)=>{
   getWheatherDataForLocation(postion.coords.latitude, postion.coords.longitude).then((data)=> setdData(data));
    })

}

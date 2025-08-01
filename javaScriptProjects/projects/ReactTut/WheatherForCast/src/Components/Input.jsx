import React from "react";
import { useWheather } from "../Context/Wheather";


const Input = (props) => {
    const wheather = useWheather();

    return (
        <div className="input">
            <input
                type="text"
                placeholder={props.placeholder || "Search Here"}
                value={wheather.searchCity}
                onChange={(e) => wheather.setSearchCity(e.target.value)} />
        </div>
    )
}
export default Input;  
import React from "react";

const UserCard=(props)=>{
    return (
    <div className="user-card">
        <img className="props.img" />
        <h3>{props.data.name.first}</h3>
        <p> {props.data.phone}  </p>
        <p>{ props.data.location.city } </p>   <p> {props.data.location.state} </p>

    </div>

    )
}

export default UserCard
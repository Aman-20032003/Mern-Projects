import React from "react";

const Square = (props) => {
    return (
        <div className="square"
        onClick={props.onClick}
            style={{ border: '1px solid black', height: '100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >

            <h5>{props.value}</h5>
        </div>
    )
}
export default Square;
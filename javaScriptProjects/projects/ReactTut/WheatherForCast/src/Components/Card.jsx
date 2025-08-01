import React from "react";
import { useWheather } from "../Context/Wheather";

const Card = () => {
  const wheather = useWheather(); // spelling corrected

  return (
    <div className="card">
      <img   src={`https:${wheather?.data?.current?.condition?.icon}`} />
      <h2>{wheather?.data?.current?.temp_c}°C</h2>
      <h5>{wheather?.data?.location?.name|| "City not found"}</h5>
    </div>
  );
};

export default Card;

import React from "react";
import MemeCard from "./Components/Card";
import { useEffect, useState } from "react";
import { getAllMemes } from "./Api/Memes";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage=()=>{
    const [data, setData]= useState([]);
    useEffect(()=>{
        getAllMemes().then((meme)=>
             setData(meme.data.memes))
    },[])
    return(
        <div className="row">
  {data.map(e => <MemeCard key={e.url} image={e.url}  title={e.name}/>)}
</div>

    )
}
 export default HomePage;
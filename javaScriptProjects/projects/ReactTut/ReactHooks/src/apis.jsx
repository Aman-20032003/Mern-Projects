import React, { useState, useEffect } from "react";
import { GetPosts, GetRandomUser } from "./api/index";
import PostCard from "./api/PostCard";
import UserCard from "./api/UserCard";

export function APIS() {
  const [state, setState] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    GetPosts().then((posts) => setState(posts));
  }, []);

  useEffect(() => {
    GetRandomUser().then((user) => setUserData(user.results[0]))
  }, []);

  const refresh=()=>{
     GetRandomUser().then((user) => setUserData(user.results[0]))
  }

  return (

    <div className="api">
     { userData && <UserCard data={userData} />}
     <button onClick={refresh}>Refresh User</button>
      {
        state ? state.map((e) => <li><PostCard title={e.title} body={e.body} /></li>) : <p>NO Data Found</p>
      }

    </div>

  )
}

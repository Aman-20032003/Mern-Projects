import { StrictMode,useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
import { BrowserRouter,Route,Routes, useParams, NavLink } from "react-router-dom"
import "./style.css"

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setState(data));
  }, []);

  return (
    <div className='post-container'>
      <h1>Posts:</h1>
      <ul>
        {state.map((post) => (
        <NavLink className='post-titles' style={{display:"block"}} to={`/post/${post.id}`} >{post.title}</NavLink>
        ))}
      </ul>
    </div>
  );
};

const About =()=>{
  return(
    <div>
      <h1>About Home Page</h1>
    </div>
  )
};

const Profile=()=>{
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
};

const Setting=()=>{
  return (
    <div>
      <h1>Setting</h1>
    </div>
  )
};

const SayHelloUser=()=>{
  const params= useParams();
  return(
    <div>
       <h1>Hello User {params.userName}</h1>
    
    </div>
   
  )
};

const PostPage = () => {
  const params = useParams();
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`) 
      .then((data) => data.json())
      .then((data) => setState(data));
  }, [params.id]);  

  if (state === null) return <p>Loading....</p>;

  return (
    <div>
      <h1>{state.title}</h1>
      <p>{state.body}</p>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/post/:id' element={<PostPage/>}/>
      <Route path='/about' element={<About/>}/>
       <Route path='/user/:userName' element={<SayHelloUser/>}/>
      <Route path='account'>
      <Route path='profile' element={<Profile/>}/>
      <Route path='setting' element={<Setting/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

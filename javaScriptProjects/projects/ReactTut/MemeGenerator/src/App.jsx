import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Home'
import EditPage from './Pages/Edit'
function App() {
return(
  <div>
    <h1>Meme Generator</h1>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
     <Route path='/edit' element={<EditPage/>}/>
   </Routes>

  </div>
)
}

export default App

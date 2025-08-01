import { useEffect } from 'react'
import Card from './Components/Card'
import Button from './Components/Button'
import Input from './Components/Input'
import "./style.css"
import {useWheather } from './Context/Wheather'
function App() {
  const wheather = useWheather();
  useEffect(()=>{
    wheather.fetchCurrentUserLocationData();
  },[]);
  return(
    <div className='app'>
       <h1 className='wheather'>Wheather Forecast</h1>
       <Input/>
      <Button onClick={wheather.fetchData} value="Search"/>
      <Card/>
       <Button value="Refresh"/>
    </div>
  )
}

export default App

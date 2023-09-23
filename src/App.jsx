import AllProducts from './Pages/AllProducts'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import { useState } from 'react'


function App() {
  const [token, setToken] = useState(localStorage.getItem('token')) 



  return (
    <div>
            <NavBar token={token} setToken={setToken}/>
      <Routes>
        <Route path='/' element={<Login setToken={setToken}/>} />
        <Route path='Products' element={<AllProducts token={token} setToken={setToken}/>}/>
      </Routes>
    </div>
  )
}

export default App

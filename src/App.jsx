import AllProducts from './Pages/AllProducts'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import { useState } from 'react'
import SingleProduct from './Pages/SingleProduct'


function App() {
  const [token, setToken] = useState(sessionStorage.getItem('token')) 



  return (
    <div>
            <NavBar token={token} setToken={setToken}/>
      <Routes>
        <Route path='/' element={<Login token={token} setToken={setToken}/>} />
        <Route path='Products' element={<AllProducts token={token} setToken={setToken}/>}/>
        <Route path='/products/:id' element={<SingleProduct token={token} setToken={setToken} />}/>
      </Routes>
    </div>
  )
}

export default App

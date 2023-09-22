import AllProducts from './Pages/AllProducts'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import { useState } from 'react'


function App() {



  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='Products' element={<AllProducts />}/>
      </Routes>
    </div>
  )
}

export default App

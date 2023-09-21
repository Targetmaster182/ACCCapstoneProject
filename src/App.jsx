import './App.css'
import AllProducts from './Pages/AllProducts'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'


function App() {



  return (
    <div>
      <Routes>
      <Route path='/' element={<AllProducts/>}/>
      </Routes>
    </div>
  )
}

export default App

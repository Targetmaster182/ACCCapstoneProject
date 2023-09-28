import AllProducts from './Pages/AllProducts'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import { useEffect, useState } from 'react'
import SingleProduct from './Pages/SingleProduct'
import CartPage from './Pages/CartPage'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')  || '[]')





function App() {
  const [token, setToken] = useState(sessionStorage.getItem('token')) 
  const [cart, setcart] = useState(cartFromLocalStorage)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart]);



  return (
    <div>
            <NavBar token={token} setToken={setToken} cart={cart} setcart={setcart}/>
      <Routes>
        <Route path='/' element={<Login token={token} setToken={setToken} cat={cart}setcart={setcart}/>} />
        <Route path='Products' element={<AllProducts token={token} setToken={setToken} cart={cart} setcart={setcart}/>}/>
        <Route path='/products/:id' element={<SingleProduct token={token} setToken={setToken} cart={cart} setcart={setcart} />}/>
        <Route path='Cart' element={<CartPage token={token} setToken={setToken} cart={cart} setcart={setcart} />} />
      </Routes>
    </div>
  )
}

export default App

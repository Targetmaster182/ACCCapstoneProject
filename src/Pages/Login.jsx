import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Components/Login.css'



export default function LoginPage({setToken}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
  
    const navigate = useNavigate()
    async function submitForm(e) {
        e.preventDefault()
        if (!username || !password) {
            setErrorMessage("Please fill username and password")
        } else {
            const login = async () => {
            try {
                const response = await fetch( 'https://fakestoreapi.com/auth/login', 
                { 
                    method: "POST", 
                    headers: { 
                        "Content-Type": "application/json" 
                    }, 
                    body: JSON.stringify({ 
                            username, 
                            password 
                    }) 
                })
                const result = await response.json();
                const { token } = result
                sessionStorage.setItem('token', token);
                sessionStorage.setItem("username",username );
                setToken(token)
                console.log(result)
                if (token) {
                    navigate('/Products')
                } else {
                    setErrorMessage(result.errorMessage)
                }   
            
  
            } catch (err) {
                console.error(err)
            }          
        }
        login()
        }
    }
    return (
      <div className='maindiv'>
        <div className='logindiv'>
          <h1>Log In</h1>
          <form onSubmit={submitForm}>
            <label className='subtitle' htmlFor="username">USERNAME: </label>
            <input
              value={username} 
              type="username"
              id="username"
              onChange={(e) => {
                setErrorMessage('');
                setUsername(e.target.value)
              }} 
            />
            <br></br>
            <label className='subtitle'htmlFor="password">PASSWORD: </label>
            <input
              value={password}
              type="password"
              id="password"
              onChange={(e) => {
                setErrorMessage('');
                setPassword(e.target.value)
              }}
            />
            <p>{errorMessage}</p>
            <button className='submit' type="submit">Log In</button>
          </form>
        </div>
      </div>
    )
  }
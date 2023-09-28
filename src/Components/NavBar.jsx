import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../Components/NavBar.css'

export default function NavBar({token, setToken, cart, setcart}) {
    const navigate = useNavigate()

    const getCartTotal = () => {
        return cart.reduce(
            (sum, {quantity}) => sum = quantity, 0
        );
    };

    async function handleClick(token, setToken){
        sessionStorage.clear(token, setToken)
        await setToken("")
        navigate('/')

    }
    if (!token) {
        return(
            <nav id="navbar">
                <ul>
                    <li>
                        <Link to="/">LOGIN</Link>
                    </li>

                    <li>
                        <Link to="/Products">PRODUCTS</Link>
                    </li>
                    
                </ul>
            </nav>
        )

    } else if (token) {
    return (
            <nav id="navbar">
                <ul>

                    
                    <li>
                        <Link to="/Products">PRODUCTS</Link>
                    </li>  

                    <li><Link to="/Cart"><svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"><path d="M1.82 7.5H10l1-5H1a.5.5 0 0 0-.49.59l.82 4a.49.49 0 0 0 .49.41Zm9.18-5l.42-1.6a.5.5 0 0 1 .49-.4h1.59m-3.5 7l-.42 2.1a.5.5 0 0 1-.49.4H3"/><circle cx="3.5" cy="13" r=".5"/><circle cx="8.5" cy="13" r=".5"/></g></svg> </Link>  {getCartTotal()} </li>             


                    <button className="logout" onClick={() => handleClick(token, setToken, sessionStorage)}>LOGOUT</button>
                    
                    
                </ul>


            </nav>
        )
    }
}
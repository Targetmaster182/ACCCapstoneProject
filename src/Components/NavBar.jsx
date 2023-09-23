import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import '../Components/NavBar.css'

export default function NavBar({token, setToken}) {
    const navigate = useNavigate()

    async function handleClick(token, setToken){
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
                    <li>PROFILE</li>                   


                    <button className="logout" onClick={() => handleClick(token, setToken)}>LOGOUT</button>
                    
                    
                </ul>


            </nav>
        )
    }
}
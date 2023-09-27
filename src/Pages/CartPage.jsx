
import '../Components/Cart.css'


const cartPage = ({cart, setcart}) => {

async function deleteItem(id) {
    setcart(cart.filter(item => item.id !== id));
}

    return (
        <div>
            <div>
                {cart.map(item =>(
                    <div key={item.id}>
                        <div >
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div>
                                <h3>{item.title}</h3> 
                                <h2>{item.price}</h2>
                                <h4>{item.quantity}</h4>
                                <span onClick={() => deleteItem(item.id)}>Remove</span>
                            </div>
                            <p>Total = {cart.reduce((sum, item, quantity) => sum + item.price * item.quantity, 0 )}</p>
                    </div>
                    
                ))}
            </div>

            
        
        
        </div>
    )

}

export default cartPage;
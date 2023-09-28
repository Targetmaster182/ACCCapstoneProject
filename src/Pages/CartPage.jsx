
import '../Components/Cart.css'


const cartPage = ({cart, setcart }) => {

async function deleteItem(id) {
    setcart(cart.filter(item => item.id !== id));
}

const setQuantity = (item, amount) => {
    const newCart =  [...cart];
    newCart.find(product => item.name === item.name).quantity = amount;
    setcart(newCart)
    
}

    return (
        <div>
            <div className='cartTotal' >
                <p>Subtotal = {cart.reduce((sum, item, quantity) => sum + item.price * item.quantity, 0 )} <button className='checkout' >CHECKOUT</button></p>
                
            </div>
            <div className='products'>
                {cart.map(item =>(
                    <div className='eachproduct' key={item.id}>
                        <div >
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div>
                                <h3>{item.title}</h3> 
                                <h2>{item.price}</h2>
                                <input 
                                className='quantity'
                                value ={item.quantity} 
                                onChange={(e) => setQuantity(item,  parseInt(e.target.value))}/>
                                <div>
                                    <span onClick={() => deleteItem(item.id)}>Remove</span>
                                </div>
                            </div>
                            
                    </div>
                    
                ))}

                
            </div>

            
        
        
        </div>
    )

}

export default cartPage;
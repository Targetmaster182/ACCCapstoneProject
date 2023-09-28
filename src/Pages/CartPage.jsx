import '../Components/Cart.css'


const cartPage = ({cart, setcart }) => {
    

async function deleteItem(id) {
    setcart(cart.filter(item => item.id !== id));
}

const setQuantity = (item, amount) => {
    const newCart =  [...cart];
    newCart.find(product => product.name === item.name && product.id === item.id).quantity = amount;
    setcart(newCart)
    
}

async function checkout(cart, setcart){   
    localStorage.clear(cart, setcart)
    await setcart("") 
    window.location.reload(false); 
    alert("Thank you for your purchase");
      
}

    return (
        <div>
            <div className='cartTotal' >
                <p>Subtotal = {cart.reduce((sum, item) => sum + item.price * item.quantity, 0 )} <button className='checkout' onClick={() => checkout(cart, setcart, localStorage)} >CHECKOUT</button></p>

                <div className='titles'>
                    <h1>Shopping Cart</h1>
                </div>
                
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
                                id ={item.id}
                                onChange={(e) => setQuantity(item,  e.target.value)}/>
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
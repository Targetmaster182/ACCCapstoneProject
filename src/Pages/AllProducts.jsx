import { useEffect, useState } from "react";
import '../Components/AllProducts.css'

const API_URL = 'https://fakestoreapi.com'

const AllProducts = ({token}) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const FetchAllProducts = async () => {
            const response = await fetch(`${API_URL}/products`);
            const products = await response.json();
            setProducts(products);

        } 
        FetchAllProducts();
    }, [])

    if (!token ) {
        return (
            <div>
            <h1>Products</h1>
            <div className="products" >
                {products.map(product =>(
                    <div className="eachproduct" key={product.id}>
                        <div >
                            <img src={product.image} alt={product.title}/>
                        </div>
                        <div>
                            <h3>{product.title}</h3> 
                            <p>{product.rating.rate} <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#eab308" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928L12 18.26Z"/></svg></p>                            
                            <p>{product.price}</p>
                        </div>   
                        <div className="buttons">
                            <button className="details">DETAILS</button>
                        </div>                     
                    </div>                    
                ))}
            </div>
        </div>

        )
    } else if (token) {

    return (
        <div>
            <h1>Products</h1>
            <div className="products" >
                {products.map(product =>(
                    <div className="eachproduct" key={product.id}>
                        <div >
                            <img src={product.image} alt={product.title}/>
                        </div>
                        <div>
                            <h3>{product.title}</h3> 
                            <p>{product.rating.rate} <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#eab308" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928L12 18.26Z"/></svg></p>                            
                            <p>{product.price}</p>
                        </div>   
                        <div className="buttons">
                            <button className="details">DETAILS</button>
                            <button className="buy"><svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"><path d="M1.82 7.5H10l1-5H1a.5.5 0 0 0-.49.59l.82 4a.49.49 0 0 0 .49.41Zm9.18-5l.42-1.6a.5.5 0 0 1 .49-.4h1.59m-3.5 7l-.42 2.1a.5.5 0 0 1-.49.4H3"/><circle cx="3.5" cy="13" r=".5"/><circle cx="8.5" cy="13" r=".5"/></g></svg></button>
                        </div>                     
                    </div>                    
                ))}
            </div>
        </div>
    )

}
}

export default AllProducts
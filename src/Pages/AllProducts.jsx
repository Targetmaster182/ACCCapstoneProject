import { useEffect, useState } from "react";
import '../Components/AllProducts.css'

const API_URL = 'https://fakestoreapi.com'

const AllProducts = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const FetchAllProducts = async () => {
            const response = await fetch(`${API_URL}/products`);
            const products = await response.json();
            setProducts(products);

        } 
        FetchAllProducts();
    }, [])

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
                            <p>{product.rating.rate}</p>
                            <p>{product.rating.count}</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default AllProducts
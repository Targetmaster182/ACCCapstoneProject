import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Components/AllProducts.css'


const API_URL = 'https://fakestoreapi.com'

const AllProducts = ({token, setToken, cart, setcart}) => {

    const [products, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState(200);
    const [categories, setcategories] = useState([]);
    const [selectedcategory, setselectedcategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')



    useEffect(() => {
        const FetchAllProducts = async () => {
            const response = await fetch(`${API_URL}/products`);
            const products = await response.json();
            const categories = products.map (product => product.category);            
            const uniquecategories = [...new Set (categories)];
            setcategories(uniquecategories);
            setProducts(products);
            setFilteredProducts(products)


        } 
        FetchAllProducts();
    }, [])

    function selectcategory(e) {
        setselectedcategory(e.target.value);

        if (e.target.value !== 'all'){
            const newFilteredProducts = products.filter(product => product.category === e.target.value);
            setFilteredProducts(newFilteredProducts)
        } else {
            setFilteredProducts(products)
        }

    }


    

    //const newFilteredProducts = filteredProducts.filter(product => product.price <= priceRange);
    //setFilteredProducts(newFilteredProducts)

    

      function handleChange(e) {
        e.preventDefault();
        setSearchTerm(e.target.value)
      }

      function filterProducts(product) {
        return (
            product.title.toString().toLowerCase().includes(searchTerm.toLowerCase()) && product.price <= priceRange
        ) 
        

      }

      function addToCart(product) {
        let newCart = [...cart];
        let cartItem = cart.find(
            (item) => product.id === item.id
        );
        
        if (cartItem) {
            cartItem.quantity++;
        }else {
            cartItem = {
            ...product,
            quantity:1,
            
        }
        newCart.push(cartItem);
    }
        setcart(newCart);

      }


    

    

    if (!token ) {
        return (
            <div className="maincontainer"> 
                <div className="filtercontainer">               
                    <select className="categories" onChange={selectcategory}>
                        <option value='all'>All</option>
                        {categories.map(category =>(
                            <option value={category} key={category}>{category}</option>
                        ))}
                    </select>
                    <div className="slider">
                    <input className="filterbar" type="range" min="0" max="200" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                </input>
                    </div>
                <div className="searchbar">
                    <form>
                        <label>Search</label>
                        <input onChange={handleChange}  value={searchTerm} type="text"/>
                        
                    </form>
                </div>
            </div>
                
                
                
                <div className="container1">

                    <div className="products" >
                        {filteredProducts.filter(filterProducts).map(product =>(
                            <div className="eachproduct1" key={product.id}>
                                <div >
                                    <img src={product.image} alt={product.title}/>
                                </div>
                                <div>
                                    <h3>{product.title}</h3> 
                                    <p>{product.rating.rate} <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#eab308" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928L12 18.26Z"/></svg> ({product.rating.count})</p>                            
                                    <h2>{product.price}</h2>
                                </div>   
                                <div className="buttons">
                                <Link to={`/products/${product.id}`}><button className="details" >DETAILS</button></Link>
                                
                                </div>                     
                            </div>                    
                        ))}
                    </div>
                </div>
            </div>

        )
    } else if (token) {

    return (
        <div className="maincontainer">   
            <div className="filtercontainer">             
                <select className="categories" onChange={selectcategory}>
                    <option value='all'>All</option>
                    {categories.map(category =>(
                        <option value={category} key={category}>{category}</option>
                    ))}
                </select>
                <div className="slider">
                    <input className="filterbar" type="range" min="0" max="200" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}></input>
                </div>

            <div className="searchbar">
                    <form>
                        <label>Search</label>
                        <input onChange={handleChange}  value={searchTerm} type="text"/>
                        
                    </form>
            </div>
        </div>
            
            
            
            <div>
                <div className="products" >
                    {filteredProducts.filter(filterProducts).map(product =>(
                        <div className="eachproduct1" key={product.id}>
                            <div >
                                <img src={product.image} alt={product.title}/>
                            </div>
                            <div>
                                <h3>{product.title}</h3> 
                                <p>{product.rating.rate} <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#eab308" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928L12 18.26Z"/></svg> ({product.rating.count})</p>                            
                                <h2>{product.price}</h2>
                            </div>   
                            <div className="buttons">
                            <Link to={`/products/${product.id}`}><button className="details" >DETAILS</button></Link>
                                <button className="add" onClick={() => addToCart(product)}>ADD TO CART</button>
                            </div>                     
                        </div>                    
                    ))}
                </div>
            </div>
        </div>

    )

    }
}

export default AllProducts
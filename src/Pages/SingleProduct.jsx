import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../API/API";
import '../Components/SingleProduct.css';

export default function SingleProduct({token}) {
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        async function fetchData() {
          const data = await fetchProductById(id)
          setProduct(data);
        }
        fetchData();
      }, [id]);
      if (!product) {
        return <h1>Loading Product..</h1>
      }


      return (
            <div className="singleproduct">
              <div>
                <img src={product.image} alt={product.title} />
              </div>
              <div className="infodiv">               
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h3>{product.rating.rate} <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#eab308" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928L12 18.26Z"/></svg>    ({product.rating.count} Ratings)</h3>
                <p>{product.category}</p>
                <h2>${product.price}</h2>
              </div>
              
            </div>
      )
     



}


  


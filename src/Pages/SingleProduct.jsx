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
      const { title, description, image, price, category, rating, rate, count } = product;

      return (
            <div className="singleproduct">
              <div>
                <img src={image} alt={title} />
              </div>
              <div className="infodiv">               
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>{rating.rate} <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#eab308" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928L12 18.26Z"/></svg>    ({rating.count} Ratings)</h3>
                <p>{category}</p>
                <h2>${price}</h2>
                <div>
                  <button className="buy"><svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"><path d="M1.82 7.5H10l1-5H1a.5.5 0 0 0-.49.59l.82 4a.49.49 0 0 0 .49.41Zm9.18-5l.42-1.6a.5.5 0 0 1 .49-.4h1.59m-3.5 7l-.42 2.1a.5.5 0 0 1-.49.4H3"/><circle cx="3.5" cy="13" r=".5"/><circle cx="8.5" cy="13" r=".5"/></g></svg></button>                
                </div>
              </div>
              
            </div>
      )
     



}


  


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://fakestoreapi.com'

const ProductDetailsPage = (token, productId) => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

        useEffect(() => {
            const getProductById = async(id) => {
              const response = await fetchfetch(`${API_URL}/products/${productId}`);
              const products = await response.json();
              setProduct(product);
            }        
          return (
            <div>
              <h2>Product Details</h2>
              <div>
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <img src={product.image} alt={product.title} />
              </div>
            </div>
          )
          });}



  

export default ProductDetailsPage;
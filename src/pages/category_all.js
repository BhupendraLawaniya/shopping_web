//parent of productcard.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { data } from '../shared/data';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../shared/productcard';
import './category_all.css';


const Category = ()=>{
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
let categoryId = useParams();
console.log(categoryId.id);

    //get api

    useEffect(() => {
     
            axios.get(`http://localhost:5000/product/item_get/${categoryId.id}`)
                .then(response => {
                    console.log(response.data.data)
                    setProducts(response.data.data); 
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
      
    }, [categoryId.id]);

    const handleAddToCart = () => {
        navigate('/addTOcart');
    };
    return(
        <div className = "A">
            {products.map((item)=>(
         <Link to ={'/product/' + item._id} className="link-no-underline" key={item._id}>  <ProductCard
          title={item.name} price={item.price} imageUrl={item.image}onAddToCart={handleAddToCart} />
          </Link>
            ))}
        </div>

       
    )
}
export default Category;
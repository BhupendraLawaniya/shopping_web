import React, { useEffect, useState } from 'react';
import './NavbarTwo.css';
import { Link } from 'react-router-dom';
// import Category from '../pages/category_jeans';
import axios from 'axios';
const Navbartwo =()=>{
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/category/getall`)
            .then(response => {
                console.log(response.data.data);
                setCategories(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
return(
    <nav className="navbar2">
     {categories.map(category => (
        <Link key={category._id} className="nav-link" to={'/category/' + category._id}>{category.title}</Link>
     ))}
 
</nav>
)
}
export default Navbartwo;


   


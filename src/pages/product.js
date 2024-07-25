import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.css';
import { useParams } from 'react-router-dom';

const Shoes = () => {
  const { id } = useParams();
  const [object, setobject] = useState({}); 

  // let id = useParams();
// console.log(objectId.id);

  useEffect(() => {
    axios.get(`http://localhost:5000/product/product_get/${id}`)
      .then(response => {
        console.log('res', response.data); 
        // console.log("show data");
        setobject(response.data.data);
        console.log('data', object); 
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  return (
    
    <div className='product1'>
      <div className='sideImg'>
        <img src='https://m.media-amazon.com/images/I/41JvGgDobKL._SS40_.jpg' alt='jordan' /><br/>
        <img src='https://m.media-amazon.com/images/I/51WrxdTiWlL._SS40_.jpg' alt='jordan' /><br/>
        <img src='https://m.media-amazon.com/images/I/51qgwzCUJYL._SS40_.jpg' alt='jordan' /><br/>
        <img src='https://m.media-amazon.com/images/I/51RW3a-Wx9L._SS40_.jpg' alt='jordan' />
      </div>
      <div className='img'>
        <div className='mainImg'>
          <img src="https://5.imimg.com/data5/ANDROID/Default/2021/6/OH/IF/DV/123686353/product-jpeg-500x500.jpg" alt='jordan' />
        </div>
      </div>
      <div className='product_details'>
        <div className='product_list'>

          <div className="product_heading">
          <h1>{object.name}</h1>
          </div>
          <div className='product_detail'>
          <b><p>Maximum cushioning provides elevated comfort for 
            everyday runs. Experience a soft, rocker-shaped 
            platform made with new ReactX foam underfoot, and 
            an ultra-comfortable collar and tongue for a snug feel.
             Plus, a water-resistant membrane was added to this version
              to help keep you dry. </p></b>
              </div>
          <div className='product_price'>
          <h1>₹ {object.price}</h1>
          </div>

        </div>
        <div className='buttons'>
        <div className='MRP_button'>
          <button>Buy now</button><br/><br/>
        </div>
        <div className='cart_button'>
        <button>Add to cart</button>
        </div>
        </div>

      </div>
    </div>
    
  );
}

export default Shoes;

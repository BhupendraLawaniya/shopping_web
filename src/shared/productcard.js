import React from 'react';
import './productcard.css';

const ProductCard = ({ imageUrl, title, price, originalPrice, discount, sizes, onAddToCart }) => {
  return (
    <>
    <div className='card'>
    <div className='product-card'>
      <div className='pic'>
        <img src={imageUrl} alt='' width={500} />
      </div>
      <div className='text'>
        <p>{title}</p>
        <p>₹{price}</p>
        
      </div>
      
    </div>
    <div className='addtocart_button'>
    <button  onClick={onAddToCart}>Add to Cart</button>
    </div>

    </div>
    </>
  );
};

export default ProductCard;

import React from 'react';
import './addTOcart.css';
const addTOcart = ()=>{
    return(
        <>
          <div className='cart-container'>
            <h2>Shopping Cart</h2>
            <table className='cart-table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className='image'>
                                <img src='https://m.media-amazon.com/images/I/51rNH8mFFGL._AC_UL480_FMwebp_QL65_.jpg' alt='Product' width={100} />
                            </div>
                            <span className='product-name'>Product Name</span>
                        </td>
                        <td>1</td>
                        <td>₹429</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
            <div className='cart-total'>
                <span>Total: ₹429</span>
            </div>
            <button className='checkout-button'>Proceed to Checkout</button>
        </div>
        
        </>
    )
}
export default addTOcart;
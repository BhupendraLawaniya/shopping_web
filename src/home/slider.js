import React from 'react';
import './slider.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from 'react-router-dom';
const slider =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    
    return(
        <div className='pic'>
        <Carousel responsive={responsive}>
        <div className='shoes'>
          <Link to='/Shoes'>
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcfZvHKAhskEiW27LbX3kcHN1hKAUf2xGPQ3O1VFjOICh5Et2errTQZGHTXB3SDy7YyRG-UoGoBBfdeRRjqYWVvfvUylVzyZi_vE3srbjwwOUmnyr3EvQQ&usqp=CAE" alt="shoes" height={"200"}></img>
            </Link>
            <h2>Shoes</h2>
            <p className='price'>$150</p>
        </div>
        <div className='headphone'>
        <Link to='headphone'>
            <img src="https://m.media-amazon.com/images/I/61Gzf69kVPL._AC_UF1000,1000_QL80_.jpg" alt="headphone" height={"200"}></img>
           </Link>
            <h2>Headphone</h2>
            <p className='price'>$30</p>
        </div>
        <div className='mobile'>
        <Link to='Mobile'>
            <img src="https://www.91-img.com/pictures/150294-v10-samsung-galaxy-s24-ultra-mobile-phone-large-1.jpg?tr=h-190,c-at_max,q-80,t-true" alt="mobile" height={"200"}></img>
            </Link>
            <h2>Mobile</h2>
            <p className='price'>$200</p>
        </div>
        <div className='watches'>
        <Link to='Watches'>
            <img src="https://www.carlington.in/cdn/shop/products/23-a.jpg?v=1694331458&width=2700" alt="watches" height={"200"}></img>
            </Link>
            <h2>Watch</h2>
            <p className='price'>$14</p>
        </div>
        <div className='suits'>
        <Link to='Suits'>
            <img src="https://celebsoutfits.com/wp-content/uploads/2022/05/john-wick-black-suit.jpg" alt="watches" height={"200"}></img>
            </Link>
            <h2>Suits</h2>
            <p className='price'>$5000</p>
        </div>
        </Carousel>
        </div>
    )
};
export default slider;
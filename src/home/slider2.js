import React from 'react';
import './slider2.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const slider2 =()=>{
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
        <div className='Coffeemaker'>
            <img src="https://m.media-amazon.com/images/I/61pkXBEU5LL._AC_SY400_.jpg" alt="shoes" height={"200"}></img>
            <h2>Coffee maker</h2>
            <p className='price'>$175</p>
        </div>
        <div className='SpicesBox'>
            <img src="https://m.media-amazon.com/images/I/51aOHmhi9sL._AC_SY400_.jpg" alt="headphone" height={"200"}></img>
            <h2>Spices Box'</h2>
            <p className='price'>$40</p>
        </div>
        <div className='MixtureGrinder'>
            <img src="https://m.media-amazon.com/images/I/61iD9EU1IML._AC_SY400_.jpg" alt="mobile" height={"200"}></img>
            <h2>Mixture Grinder</h2>
            <p className='price'>$200</p>
        </div>
        <div className='WaterPurifier'>
            <img src="https://m.media-amazon.com/images/I/41MhGSY6WWL._AC_SY400_.jpg" alt="watches" height={"200"}></img>
            <h2>Water Purifier</h2>
            <p className='price'>$1400</p>
        </div>
        <div className='Tandoor'>
            <img src="https://m.media-amazon.com/images/I/51oZ4a1RSVL._AC_SY400_.jpg" alt="watches" height={"200"}></img>
            <h2>Electric Tandoor</h2>
            <p className='price'>$900</p>
        </div>
        </Carousel>
        </div>
    )
};
export default slider2;
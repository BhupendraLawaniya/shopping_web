import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slickslider.css';
const slickslider =()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 1,               
        slidesToScroll: 1
      };
  
      return (
        <div className='pic'>
        <Slider {...settings}>
        <div> 
            <img  src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg" width={"1600"} alt=""/> 
        </div>

        <div> 
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg" width={"1600"} alt=""/> 
        </div>

        <div> 
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg" width={"1600"} alt=""/> 
        </div>
        </Slider>
        </div>
      );
}
export default slickslider;
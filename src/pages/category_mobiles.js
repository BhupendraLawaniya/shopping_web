import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './category_jeans.css';
const Category2 = ()=>{
    const navigate = useNavigate();

    const handleaddTOcart =()=>{
        navigate('/addTOcart');
    }
    return(
        <><div className='container1'>
            <div className='row1'>
             <div className='pic1'>  
             <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70' alt='' width={300}></img>
             </div>
             <div className='text'> 
            <p>
            Lzard
            Men Regular Mid Rise Grey Jeans
            ₹429₹2,29981% off
            Daily Saver</p>
            <p>Size 28, 30, 32, 34, 36, 38, 40, 42</p>
            <button type='button'>Buy Now</button><br/>
            <button type='button' onClick={handleaddTOcart}>addTOcart</button>
            </div>
            </div>

            <div className='row2'>
                <div className='pic2'>
                <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=70' alt=''width={300}></img>
                </div>
                <div className='text'>
            <p>
            Lzard
            Men Regular Mid Rise Grey Jeans
            ₹429₹2,29981% off
            Daily Saver</p>
            <p>Size 28, 30, 32, 34, 36, 38, 40, 42</p>
            <button type='button'>Buy Now</button><br/>
            <button type='button'onClick={handleaddTOcart}>addTOcart</button>
            </div>
            </div>

            <div className='row3'>
                <div className='pic3'>
                <img src='https://m.media-amazon.com/images/I/718jcIFYaAL._AC_UY327_FMwebp_QL65_.jpg' alt=''width={300}></img>
                </div> 
                <div className='text'>
            <p>
            Lzard
            Men Regular Mid Rise Grey Jeans
            ₹429₹2,29981% off
            Daily Saver</p>
            <p>Size 28, 30, 32, 34, 36, 38, 40, 42</p>
            <button type='button'>Buy Now</button><br/>
            <button type='button'onClick={handleaddTOcart}>addTOcart</button>
            </div>
            </div>
            </div>

            <div className='container2'>
            <div className='row4'>
                <div className='pic4'>
                <img src='https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY327_FMwebp_QL65_.jpg' alt=''width={300}></img>
                </div>
                <div className='text'>
            <p>
            Lzard
            Men Regular Mid Rise Grey Jeans
            ₹429₹2,29981% off
            Daily Saver</p>
            <p>Size 28, 30, 32, 34, 36, 38, 40, 42</p>
            <button type='button'>Buy Now</button><br/>
            <button type='button'onClick={handleaddTOcart}>addTOcart</button>
            </div>
            </div>

            <div className='row5'>
                <div className='pic5'>
                <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70' alt=''width={300}></img>
             </div>
            <div className='text'>
            <p>
            Lzard
            Men Regular Mid Rise Grey Jeans
            ₹429₹2,29981% off
            Daily Saver</p>
            <p>Size 28, 30, 32, 34, 36, 38, 40, 42</p>
            <button type='button'>Buy Now</button><br/>
            <button type='button'onClick={handleaddTOcart}>addTOcart</button>
            </div>
            </div>

            <div className='row6'>
                <div className='pic6'>
                <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/jean/m/g/b/28-ljh1001-lzard-original-imagkh7fgyxzssyy.jpeg?q=70' alt=''width={300}></img>
             </div>
            <div className='text'>
            <p>
            Lzard
            Men Regular Mid Rise Grey Jeans
            ₹429₹2,29981% off
            Daily Saver</p>
            <p>Size 28, 30, 32, 34, 36, 38, 40, 42</p>
            <button type='button'>Buy Now</button><br/>
            <button type='button'onClick={handleaddTOcart}>addTOcart</button>
            </div>
            </div>
            </div>
            
            </>
        
    )
}
export default Category2;
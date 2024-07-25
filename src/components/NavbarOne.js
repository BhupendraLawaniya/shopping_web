import React from 'react';
import './NavbarOne.css';

import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return(
        
        <div className='topnav'>
            <div className='brand'>
            <span style={{color:'White'}}>Buy2</span>
            <span style={{color:'yellow'}}>Market</span>
            </div>

            <div className='searchbar'>
                <input type="text" placeholder='Search Product'></input>
                <button >Find</button>
            </div>

            <ul className='navlink'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='Login'>Login</Link></li>
            <li><Link to='Registration'>Registration</Link></li>
            </ul>

        </div>
       
       
        )
        }
        export default Navbar;
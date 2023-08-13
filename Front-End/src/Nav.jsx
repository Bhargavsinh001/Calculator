import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return ( 
        <>
        
       
        <ul>
  <li className='li'><NavLink to={'/'} className='NavLink'> Home</NavLink></li>
  <li className='li'><NavLink to={'/effect'} className='NavLink'> Effect</NavLink></li>
  <li className='li'><NavLink to={'/calculator'} className='NavLink'>Calculator</NavLink></li>
</ul>

        </> 

     );
}

export default Nav;
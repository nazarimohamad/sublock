import React from 'react';
import './style.scss'
import logo from './images/logo.png';

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='navbar_brand'>
        <img src={logo} alt='boylando' />
      </div>
      <div className='navbar_items'>
        <ul className='navbar_link'>
          <li>home</li>
          <li>about</li>
          <li>project</li>
          <li>product</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
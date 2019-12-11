import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss'
import logo from './images/logo01.jpg';

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='navbar_brand'>
        <Link to='/'><img src={logo} alt='boylando' /></Link>
      </div>
      <div className='navbar_items'>
        <ul className='navbar_link'>
          {/* <li>home</li> */}
          <li><Link className='link' to='about'>about</Link></li>
          <li><Link className='link' to='terms-and-conditions'>blog</Link></li>
          <li>product</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
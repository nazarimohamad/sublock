import React from 'react';
import ai from './images/ai1.jpg'
import './style.scss'


const Artificial = () => {
  return(
    <div className='product'>
    <div className='product_container'>
      <div className='product_image' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1500">
        <img src={ai} alt='sus' />
      </div>
      <div className='product_text' data-aos="fade-up-left" data-aos-duration="800" data-aos-delay="1500">
        <h2>Artificial Inteligence </h2>
        <p>Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi ut
        velit tempor aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus
        pellentesque interdum. Vivamus placerat id leo a pellentesque. Vivamus a congue urna,
        sed porta eros. Etiam finibus magna et est aliquam, sed semper libero facilisis.
        Donec lectus lorem, rhoncus vitae quam eget, vulputate gravida elit. Praesent ultricies
        eros id velit condimentum, eu ultrices nisl consequat.</p>
      </div>
    </div>
  </div>
  );
}

export default Artificial
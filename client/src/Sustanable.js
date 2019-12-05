import React from 'react';
import sus from './images/sus1.jpg';

const Sustanable = () => {
  return(
    <div className='product'>
      <div className='product_container'>
        <div className='product_image' data-aos="fade-up-right" data-aos-duration="800">
          <img src={sus} alt='sus' />
        </div>
        <div className='product_text' data-aos="zoom-in" data-aos-duration="800">
          <h2>Sustainable </h2>
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

export default Sustanable;
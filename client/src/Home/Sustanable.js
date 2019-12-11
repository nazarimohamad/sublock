import React from 'react';
import sus from '../images/sus5.jpg';
import './home.scss';

const Sustanable = () => {
  return(
    <div className='product'>
      <div className='product_container'>
        <div className='product_image' data-aos="fade-up-right" data-aos-duration="800">
          <img src={sus} alt='sus' />
        </div>
        <div className='product_text' data-aos="zoom-in" data-aos-duration="800">
          <h2>Sustainable </h2>
          <p>We are a high-end sustainable apparel marketplace where every designer
            could sell his/her taste in fashion with sustainable materials. We partner with the best
            ethical designers in the world that think quality is over quantity and price of each item would be
            suitable for the whole sustainable fashion shoppers. Our sustainable product is better for the
            health and the land of farmers, and also protect wildlife.</p>
        </div>
      </div>
    </div>
  );
}

export default Sustanable;
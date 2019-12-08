import React from 'react';
import block from './images/fashion004.jpg'
import './style.scss'


const Blockchain = () => {
  return(
    <div className='product'>
    <div className='product_container'>
      <div className='product_text' data-aos="fade-up-left" data-aos-duration="800" data-aos-delay="1500">
        <h2>Blockchain </h2>
        <p>A blockchain is a time-stamped series of immutable records of data that is managed by a cluster of
          computers joining into that blockchain. It enhances transparency as all the information stored cannot be altered.
          It reduces frauds as the nature of its immutability increases confidence in data integrity. It eliminates the need for
          a third party thus reducing overhead costs. So, blockchain technology blockchain can track the product’s journey from
          supply chain to retailers.</p>
      </div>
      <div className='product_image' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="2000">
        <img src={block} alt='sus'/>
      </div>
    </div>
  </div>
  );
}

export default Blockchain
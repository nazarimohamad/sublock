import React from 'react';
import ai from '../images/ai3.png';
import '../style.scss';

const Artificial = () => {
  return (
    <div className="product">
      <div className="product_container">
        <div
          className="product_image"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="1500">
          <img src={ai} alt="sus" />
        </div>
        <div
          className="product_text"
          data-aos="fade-up-left"
          data-aos-duration="800"
          data-aos-delay="1500">
          <h2>Artificial Inteligence </h2>
          <p>
            We are using AI and machine learning to maximize users’ shopping
            experience, improve the efficiency of sales systems through
            intelligent automation, and enhance the sales processes using
            predictive analytics and guided sales processes. Although the core
            of the platform is built on innovation in blockchain technology, we
            believe our AI algorithm is special and has an innovation pattern
            that make us the first and the best in this industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artificial;

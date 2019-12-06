import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.scss';
import fashion01 from './images/fashion07.jpeg';
import fashion02 from './images/fashion02.jpg';
import fashion05 from './images/fashion05.jpeg';


class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: 1400
			}
    }
  }

  componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	};


  handleScroll = (event) => {
		let scrollTop = window.scrollY,
        minWidth = 1000,
        width = Math.max(minWidth, 1400 - scrollTop)
        width = width/14
		this.setState({
			style: {
        width: width
      }

		});
	};


  render(){
    return (
      <section className='hero'>
        <div className='hero_container' style={{width:`${this.state.style.width}%`, margin:'auto'}}>
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={false}
            interval={4000}
            transitionTime={400}>
              <div>
                  <img src={fashion05} alt={fashion05} className='image'/>
                  <p className="legend" style={{color:'rgb(4, 43, 46)'}}>Legend one says that i=this is icons for the best icon 1</p>
              </div>
              <div>
                  <img src={fashion02} alt={fashion02} className='image'/>
                  <p className="legend" style={{color:'white !important'}}>Legend is about sex shop in the resturant and fuck the beautiful girl 2</p>
              </div>
              <div>
                  <img src={fashion01} alt={fashion01} className='image'/>
                  <p className="legend" style={{color:'white'}}>Legend is nothing just another sex with estonian girls in the street3</p>
              </div>
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Hero;
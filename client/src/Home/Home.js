import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero';
import Wipes from './Wipes';
import Contact from './Contact';


const Home = () => {
  return (
    <ParallaxProvider>
      <Hero />
      <Wipes />
      <Contact />
    </ParallaxProvider>
  );
}

export default Home;
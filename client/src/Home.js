import React from 'react';
import Hero from './Hero';
import Wipes from './Wipes';
import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';

const Home = () => {
  AOS.init()
  return (
    <ParallaxProvider>
      <Hero />
      <Wipes />
    </ParallaxProvider>
  );
}

export default Home;
import React from 'react';
import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero';
import Wipes from './Wipes';
import Contact from './Contact';

const Home = () => {
  AOS.init()
  return (
    <ParallaxProvider>
      <Hero />
      <Wipes />
      <Contact />
    </ParallaxProvider>
  );
}

export default Home;
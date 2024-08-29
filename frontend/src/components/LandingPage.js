import React from 'react'
import HeroSection from './Hero';
import Event from './Event';
import Explore from './Explore';
import Calendar from './Calendar';
import Pricing from './Pricing';
import Welcome from './Welcome';
import About from './About';
import Footer from './Footer';
const LandingPage = () => {
  return (
  <>
      <HeroSection />
      <Event />
      <Explore />
      <Calendar />
      {/* <Pricing /> */}
      <Welcome />
      <About />
      <Footer/>
  </>
  )
}

export default LandingPage

import React from 'react'
import HeroSection from './components/Hero';
import Event from './components/Event';
import Explore from './components/Explore';
import Calendar from './components/Calendar';
import Pricing from './components/Pricing';
import Welcome from './components/Welcome';
import About from './components/About';
const Landingpg = () => {
  return (
    <div>
      <HeroSection />
      <Event />
      <Explore />
      <Calendar />
      <Pricing />
      <Welcome />
      <About />
    </div>
  )
}

export default Landingpg

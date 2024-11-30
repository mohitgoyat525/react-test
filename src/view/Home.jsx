import React from 'react'
import Hero from '../components/common/Hero'
import SimpleSlider from '../components/home/Slider'
import PowerFull from '../components/home/PowerFull'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
      <div>
      <Hero />
      <SimpleSlider />
      <PowerFull />
      <Footer/>
    </div>
  )
}

export default Home
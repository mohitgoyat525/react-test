import React from 'react'
import Hero from '../components/common/Hero'
import SwiperTest from '../components/home/SwiperTest'
import ThreeCards from '../components/home/ThreeCards'
import Counter from '../components/home/Counter'
import Footer from '../components/common/Footer'

const About = () => {
  return (
      <div>
      <Hero />
      <SwiperTest />
      <ThreeCards />
      <div>
        <Counter />
        <Footer/>
        </div>
    </div>
  )
}

export default About
import React from 'react'

import { HeroSection,Services,BigNFTSlider,Subscribe } from '@/components/componentindex'
import Style from "../styles/index.module.css";


const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Services />
      <BigNFTSlider />
      <Subscribe />
    </div>
  )
}

export default Home
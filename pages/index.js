import React from 'react'

import { HeroSection,Services } from '@/components/componentindex'
import Style from "../styles/index.module.css";


const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Services />
    </div>
  )
}

export default Home
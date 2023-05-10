import React from 'react'

import { HeroSection } from '@/components/componentindex'
import Style from "../styles/index.module.css";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
    </div>
  )
}

export default Home
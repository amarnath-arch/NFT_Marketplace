import React from 'react'

import { HeroSection,Services,BigNFTSlider,Subscribe,Title,Category } from '@/components/componentindex'
import Style from "../styles/index.module.css";


const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Services />
      <BigNFTSlider />
      <Title heading="Browse by category" paragraph="Explore the NFTs in most featured categories." />
      <Category />
      <Subscribe />
    </div>
  )
}

export default Home
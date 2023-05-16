import React from 'react'

import { HeroSection,Services,BigNFTSlider,Subscribe,Title,Category,Filter } from '@/components/componentindex'
import Style from "../styles/index.module.css";


const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Services />
      <BigNFTSlider />
      <Title heading="Featured NFTs" paragraph="Discover the most oustanding NFTs in all topics of life." />
      <Filter />
      <Title heading="Browse by category" paragraph="Explore the NFTs in most featured categories." />
      <Category />
      <Subscribe />
    </div>
  )
}

export default Home
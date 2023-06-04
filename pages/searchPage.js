import React from 'react'

import Style from "../styles/searchPage.module.css";
import { Banner, NFTCardTwo } from '@/collectionPage/collectionPageindex';
import { Filter, Slider, Brand } from '@/components/componentindex';
import images from "../img";
import { SearchBar } from '@/searchPage/searchPageindex';

const searchPage = () => {
    const collectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3
    ];


  return (
    <div className={Style.searchPage}>
        <Banner bannerImage={images.creatorbackground7} />
        <SearchBar />
        <Filter />
        <NFTCardTwo nftData={collectionArray}/>
        <Slider />
        <Brand />

    </div>

  )
}

export default searchPage